import { ChangeEvent, FC, useState } from 'react';
import { Tabs, Tab, Box, styled, Container, Card, Grid, TableContainer, Table, TableCell, TableHead, TableRow } from '@mui/material';

interface UserListProps {

}

type TabType = 'all' | 'administrators' | 'students' | 'lecturers';

const tabs: { value: TabType, label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'administrators', label: 'Administrators' },
  { value: 'students', label: 'Students' },
  { value: 'lecturers', label: 'Lecturers' }
];

export const UserList: FC<UserListProps> = () => {
  const [currentTab, setCurrentTab] = useState<string>('all');

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

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
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};
