import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useAuth } from 'src/contexts/AuthContext';

type PageHeaderProps = {
  openModal: () => void;
};

function PageHeader(props: PageHeaderProps) {
  const { openModal } = props;
  const { user } = useAuth();
  const userData = {
    name: user.name,
    avatar: '/static/images/avatars/1.jpg'
  };
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
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={openModal}
        >
          Create Course
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
