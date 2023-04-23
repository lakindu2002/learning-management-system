import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useAuth } from 'src/contexts/AuthContext';
import { InstituteUserRole } from 'src/models/user';

type PageHeaderProps = {
  openModal: () => void;
  setIsOpenAssignStudents: () => void;
};

function PageHeader(props: PageHeaderProps) {
  const { openModal, setIsOpenAssignStudents } = props;
  const { user } = useAuth();
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Courses
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, manage courses here.
        </Typography>
      </Grid>
      <Grid item>
        {user?.currentInstitute?.role !== InstituteUserRole.STUDENT &&
          user?.currentInstitute?.role !== InstituteUserRole.LECTURER && (
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              color="primary"
              startIcon={<AddTwoToneIcon fontSize="small" />}
              onClick={openModal}
            >
              Create Course
            </Button>
          )}

        <label> </label>

        {(user?.currentInstitute.role === InstituteUserRole.ADMINISTRATOR ||
          user?.currentInstitute.role === InstituteUserRole.OWNER) && (
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
            onClick={setIsOpenAssignStudents}
          >
            Assign Students
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

export default PageHeader;
