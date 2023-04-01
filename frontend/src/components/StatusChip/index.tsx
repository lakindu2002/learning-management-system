import { Chip } from '@mui/material';
import { FC } from 'react';
import { Status } from 'src/models/common';

interface StatusChipProps {
    status: Status;
}

const statusNames = {
    [Status.ACTIVE]: 'Active',
    [Status.IN_ACTIVE]: 'Inactive',
    [Status.PENDING]: 'Pending'
}

const statusColors = {
    [Status.ACTIVE]: 'success',
    [Status.IN_ACTIVE]: 'error',
    [Status.PENDING]: 'warning'
}


const StatusChip: FC<StatusChipProps> = ({ status }) => {
    return <Chip label={statusNames[status]}
        color={statusColors[status] as any}
    />;
};

export default StatusChip;
