
import { FC, useState } from 'react';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useAuth } from 'src/contexts/AuthContext';
import { UserAdd } from './UserAdd';


export const PageHeader: FC = () => {
  const { user } = useAuth();
  const [showAdd, setShowAdd] = useState<boolean>(false);

  const handleToggleAdd = () => {
    setShowAdd((prev) => !prev);
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            User Management
          </Typography>
          <Typography variant="subtitle2">
            {user?.name}, manage the people in your institute.
          </Typography>
        </Box>
        <Button
          variant= {showAdd ? 'outlined' : 'contained'}
          onClick={handleToggleAdd}
          {...!showAdd && {
            startIcon: <AddTwoToneIcon />
          }}
        >
          {showAdd ? 'Cancel' : 'Add User'}
        </Button>
      </Box>
      {showAdd &&
        <>
          <Divider sx={{ my: 2 }} />
          <UserAdd sx={{ my: 3 }} />
        </>}
    </>
  );
}

export default PageHeader;
