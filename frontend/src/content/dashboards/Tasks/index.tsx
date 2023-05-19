import { ChangeEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import Footer from 'src/components/Footer';
import {
  Grid,
  Tab,
  Tabs,
  Divider,
  Container,
  Card,
  Box,
  useTheme,
  Avatar,
  styled,
  Paper,
  Typography
} from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import TeamOverview from './TeamOverview';
import TasksAnalytics from './TasksAnalytics';
import Performance from './Performance';
import Projects from './Projects';
import Checklist from './Checklist';
import Profile from './Profile';
import TaskSearch from './TaskSearch';

const TabsContainerWrapper = styled(Box)(
  ({ theme }) => `
      padding: 0 ${theme.spacing(2)};
      position: relative;
      bottom: -1px;

      .MuiTabs-root {
        height: 44px;
        min-height: 44px;
      }

      .MuiTabs-scrollableX {
        overflow-x: auto !important;
      }

      .MuiTabs-indicator {
          min-height: 4px;
          height: 4px;
          box-shadow: none;
          bottom: -4px;
          background: none;
          border: 0;

          &:after {
            position: absolute;
            left: 50%;
            width: 28px;
            content: ' ';
            margin-left: -14px;
            background: ${theme.colors.primary.main};
            border-radius: inherit;
            height: 100%;
          }
      }

      .MuiTab-root {
          &.MuiButtonBase-root {
              height: 44px;
              min-height: 44px;
              background: ${theme.colors.alpha.white[50]};
              border: 1px solid ${theme.colors.alpha.black[10]};
              border-bottom: 0;
              position: relative;
              margin-right: ${theme.spacing(1)};
              font-size: ${theme.typography.pxToRem(14)};
              color: ${theme.colors.alpha.black[80]};
              border-bottom-left-radius: 0;
              border-bottom-right-radius: 0;

              .MuiTouchRipple-root {
                opacity: .1;
              }

              &:after {
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                bottom: 0;
                height: 1px;
                content: '';
                background: ${theme.colors.alpha.black[10]};
              }

              &:hover {
                color: ${theme.colors.alpha.black[100]};
              }
          }

          &.Mui-selected {
              color: ${theme.colors.alpha.black[100]};
              background: ${theme.colors.alpha.white[100]};
              border-bottom-color: ${theme.colors.alpha.white[100]};

              &:after {
                height: 0;
              }
          }
      }
  `
);

function DashboardTasks() {
  const theme = useTheme();

  const [currentTab, setCurrentTab] = useState<string>('analytics');

  const tabs = [{ value: 'analytics', label: 'Analytics Overview' }];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <>
      <Helmet>
        <title>My Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </TabsContainerWrapper>
        <Card variant="outlined">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
          >
            {currentTab === 'analytics' && (
              <>
                <Grid item xs={12}>
                  <Box p={4}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        p: 2
                      }}
                    >
                      <Paper
                        sx={{
                          p: 3,
                          textAlign: 'center',
                          color: 'black',
                          borderRadius: '15px',
                          backgroundColor: '#e6b800',
                          width: '200px'
                        }}
                      >
                        <Typography variant="h6" gutterBottom>
                          Total Students
                        </Typography>
                        <Typography
                          variant="h1"
                          sx={{ fontSize: '2.5em' }}
                          gutterBottom
                        >
                          24
                        </Typography>
                      </Paper>
                      <Paper
                        sx={{
                          p: 3,
                          textAlign: 'center',
                          color: 'black',
                          borderRadius: '15px',
                          backgroundColor: '#006600',
                          width: '200px'
                        }}
                      >
                        <Typography variant="h6" gutterBottom>
                          Total Courses
                        </Typography>
                        <Typography
                          variant="h1"
                          sx={{ fontSize: '2.5em' }}
                          gutterBottom
                        >
                          09
                        </Typography>
                      </Paper>
                      <Paper
                        sx={{
                          p: 3,
                          textAlign: 'center',
                          color: 'black',
                          borderRadius: '15px',
                          backgroundColor: '#9966ff',
                          width: '200px'
                        }}
                      >
                        <Typography variant="h6" gutterBottom>
                          Total Lecturers
                        </Typography>
                        <Typography
                          variant="h1"
                          sx={{ fontSize: '2.5em' }}
                          gutterBottom
                        >
                          09
                        </Typography>
                      </Paper>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      background: `${theme.colors.alpha.black[5]}`
                    }}
                  >
                    <Grid container spacing={0}>
                      <Grid item xs={12} md={6}>
                        <Box
                          p={4}
                          sx={{
                            background: `${theme.colors.alpha.white[70]}`
                          }}
                        >
                          <Checklist />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Grid item xs={12}>
                          <Box p={4}>
                            <Projects />
                          </Box>
                          <Divider />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardTasks;
