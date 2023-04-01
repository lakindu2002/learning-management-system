import { Chip } from '@mui/material';
import { FC } from 'react';
import { useRoles } from 'src/hooks/use-roles';
import { InstituteUserRole } from 'src/models/user';

interface RoleChipProps {
    role: InstituteUserRole;
}

const RoleChip: FC<RoleChipProps> = ({ role }) => {
    const roles = useRoles();
    const roleToShow = roles.find((r) => r.value === role);
    return <Chip label={roleToShow.label}
        color={roleToShow.color as any}
        sx={{
            borderRadius: 1,
        }}
    />;
};

export default RoleChip;
