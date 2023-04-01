import { LoadingButton } from '@mui/lab';
import { Box, Card, CardProps, MenuItem, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useRoles } from 'src/hooks/use-roles';
import { useInstituteUsers } from 'src/hooks/use-users';
import { InstituteUserRole } from 'src/models/user';

interface UserAddProps extends CardProps { }

export const UserAdd: FC<UserAddProps> = ({ sx, ...rest }) => {
  const roles = useRoles([InstituteUserRole.OWNER]);
  const { inviteUsersToInstitute, isInviting } = useInstituteUsers();
  const [emailField, setEmailField] = useState<string>('');
  const [role, setRole] = useState<InstituteUserRole>(roles[0].value);

  const handleAdd = async () => {
    await inviteUsersToInstitute(emailField.split(','), role);
  }

  return (
    <Card sx={{ p: 3, ...sx }}
      {...rest}
    >
      <Typography variant="h4">
        Add people
      </Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        justifyContent: 'space-around',
        flexFlow: 'row wrap',
      }}>
        <TextField
          value={emailField}
          onChange={(e) => setEmailField(e.target.value)}
          margin='normal'
          placeholder='Enter emails to add (seperate by comma)'
          sx={{
            flexGrow: 2
          }}
        />
        <TextField
          value={role}
          onChange={(e) => setRole(e.target.value as InstituteUserRole)}
          margin='normal'
          label='Role'
          sx={{
            flexGrow: 1
          }}
          select
        >
          {roles.map((role) => (
            <MenuItem
              key={role.value}
              value={role.value}
            >
              {role.label}
            </MenuItem>
          ))}
        </TextField>
        <LoadingButton
          variant="contained"
          disabled={!emailField}
          loading={isInviting}
          onClick={() => handleAdd()}
          sx={{
            flexGrow: 1,
            mt: 0.5
          }}
        >
          Add
        </LoadingButton>
      </Box>
    </Card >
  );
};
