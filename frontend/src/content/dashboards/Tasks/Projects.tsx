import {
  Button,
  CardHeader,
  Box,
  Grid,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  AvatarGroup,
  LinearProgress,
  Badge,
  styled,
  useTheme
} from '@mui/material';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { Link as RouterLink } from 'react-router-dom';
import Text from 'src/components/Text';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';

const AvatarWrapperSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.lighter};
      color:  ${theme.colors.success.main};
`
);

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.8)};
    height: ${theme.spacing(1.8)};
    display: inline-block;
    border: 2px solid ${theme.colors.alpha.white[100]};
    margin-right: ${theme.spacing(0.5)};
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
        flex-grow: 1;
        height: 10px;
        margin: ${theme.spacing(1, 0, 2)};
        
        &.MuiLinearProgress-root {
          background-color: ${theme.colors.alpha.black[10]};
        }
        
        .MuiLinearProgress-bar {
          border-radius: ${theme.general.borderRadiusXl};
        }
`
);

function Projects() {
  const theme = useTheme();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3
        }}
      >
        <Typography variant="h3">Courses Offered</Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box>
            <CardHeader
              sx={{
                px: 0,
                pt: 0
              }}
              avatar={
                <AvatarWrapperSuccess>
                  <CheckTwoToneIcon />
                </AvatarWrapperSuccess>
              }
              title="RAD"
              titleTypographyProps={{
                variant: 'h5',
                color: 'textPrimary'
              }}
            />
          </Box>
          <Grid item xs={12} md={4}>
            <Box>
              <CardHeader
                sx={{
                  px: 0,
                  pt: 0
                }}
                avatar={
                  <AvatarWrapperSuccess>
                    <CheckTwoToneIcon />
                  </AvatarWrapperSuccess>
                }
                title="FCC"
                titleTypographyProps={{
                  variant: 'h5',
                  color: 'textPrimary'
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <CardHeader
                sx={{
                  px: 0,
                  pt: 0
                }}
                avatar={
                  <AvatarWrapperSuccess>
                    <CheckTwoToneIcon />
                  </AvatarWrapperSuccess>
                }
                title="AI"
                titleTypographyProps={{
                  variant: 'h5',
                  color: 'textPrimary'
                }}
              />
            </Box>
          </Grid>
          <Box>
            <Button size="small" variant="outlined">
              View all Courses
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
