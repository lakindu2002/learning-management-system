import { useState } from 'react';
import { uniq } from 'lodash';
import { toast } from 'react-hot-toast';
import { useAuth } from 'src/contexts/AuthContext';
import axios from 'src/lib/axios';
import { InstituteUserRole } from 'src/models/user';

const validator = require('validator');

export const useInstituteUsers = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState<any[]>([]);
  const [nextKey, setNextKey] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [isInviting, setInviting] = useState<boolean>(false);

  const getInstituteUsers = async (mode: 'initial' | 'paginate', fetchByRole?: InstituteUserRole) => {
    try {
      if (mode === 'initial') {
        setIsLoading(true);
      } else {
        setIsLoadingMore(true)
      }
      const resp = await axios.post<{ users: any[], nextKey: any }>(
        `/api/institutes/${user?.currentInstitute.id}/users/get`,
        {
          limit: 10,
          nextKey,
          role: fetchByRole
        })
      setUsers(mode === 'initial' ? resp.data.users : [...users, ...resp.data.users]);
      setNextKey(resp.data.nextKey);
    } catch (err) {
      toast.error('We ran into an error while fetching users. Please try again');
    } finally {
      if (mode === 'initial') {
        setIsLoading(false);
      } else {
        setIsLoadingMore(false)
      }
    }
  };

  const inviteUsersToInstitute = async (emails: string[], role: InstituteUserRole) => {
    const invalidEmails = emails.filter((email) => !validator.isEmail(email));
    if (invalidEmails.length > 0) {
      toast.error(`The following emails you provided are invalid - ${invalidEmails.join(', ')}`)
      return;
    }
    const uniqueEmails = uniq(emails);
    setInviting(true);
    try {
      const resp = await axios.post<{ users: any[] }>(`/api/institutes/${user?.currentInstitute.id}/users`, {
        role,
        emails: uniqueEmails
      })
      setUsers((prev) => [...prev, ...resp.data.users])
    } catch (err) {
      console.log(err);
      toast.error('Could not add people to institute. Please try again');
    } finally {
      setInviting(false);
    }
  }

  return {
    getInstituteUsers,
    isLoading,
    hasMoreUsers: !!nextKey,
    inviteUsersToInstitute,
    isLoadingMore,
    isInviting
  }
};
