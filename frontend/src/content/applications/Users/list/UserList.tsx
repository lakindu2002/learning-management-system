import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Tabs, Tab, Box, Container, Card, Grid, TableContainer, Table, TableCell, TableHead, TableRow, CircularProgress, Typography, Alert, TableBody } from '@mui/material';
import { useInstituteUsers } from 'src/hooks/use-users';
import { InstituteUserRole } from 'src/models/user';
import RoleChip from 'src/components/RoleChip';
import StatusChip from 'src/components/StatusChip';
import { LoadingButton } from '@mui/lab';

interface UserListProps {

}

type TabType = 'all' | InstituteUserRole.ADMINISTRATOR | InstituteUserRole.STUDENT | InstituteUserRole.LECTURER;

const tabs: { value: TabType, label: string }[] = [
  { value: 'all', label: 'All' },
  { value: InstituteUserRole.ADMINISTRATOR, label: 'Administrators' },
  { value: InstituteUserRole.STUDENT, label: 'Students' },
  { value: InstituteUserRole.LECTURER, label: 'Lecturers' }
];

export const UserList: FC<UserListProps> = () => {
  const [currentTab, setCurrentTab] = useState<TabType>('all');
  const { getInstituteUsers, isLoading, isLoadingMore, hasMoreUsers, users } = useInstituteUsers();

  const handleTabsChange = (_event: ChangeEvent<{}>, value: TabType): void => {
    setCurrentTab(value);
  };

  useEffect(() => {
    getInstituteUsers('initial', currentTab === 'all' ? undefined : currentTab);
  }, [currentTab]);

  const handleLoadMore = () => {
    getInstituteUsers('paginate', currentTab === 'all' ? undefined : currentTab)
  }

  return (
    <>
      <Container maxWidth="lg">
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
        <Card variant="outlined" sx={{ my: 5 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
          >
            <Grid item xs={12}>
              <Box sx={{ py: 2 }}>
                {isLoading ? (
                  <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress size="1.5rem" />
                  </Box>
                ) : (
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow
                          key={user.id}
                          sx={{ py: 2 }}
                        >
                          <TableCell>
                            <Typography variant="body1">
                              {user.name}
                            </Typography>
                            <Typography variant="body2"
                              color="text.secondary"
                            >
                              {user.email}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <RoleChip role={user.role} />
                          </TableCell>
                          <TableCell>
                            <StatusChip
                              status={user.status}
                            />
                          </TableCell>
                          <TableCell>

                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}

                {(users.length > 0 || hasMoreUsers) && (
                  <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', my: 2 }}>
                    {users.length === 0 && (
                      <Alert
                        severity='info'
                      >
                        There are no users.
                      </Alert>
                    )}
                    {hasMoreUsers && (
                      <LoadingButton
                        loading={isLoadingMore}
                        variant="contained"
                        onClick={handleLoadMore}
                      >
                        Load More
                      </LoadingButton>
                    )}
                  </Box>
                )}


              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};
