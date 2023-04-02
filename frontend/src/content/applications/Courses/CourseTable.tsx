import { FC, ChangeEvent, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Typography,
  useTheme
} from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import { Course } from 'src/models/course';

interface CourseTableProps {
  className?: string;
  courses: Course[];
}

const CourseTable: FC<CourseTableProps> = ({ courses }) => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const selectedBulkActions = selectedCourses.length > 0;
  const handleSelectAllCourses = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCourses(
      event.target.checked ? courses.map((course) => course.id) : []
    );
  };

  const handleSelectOneCourse = (
    event: ChangeEvent<HTMLInputElement>,
    courseId: string
  ): void => {
    if (!selectedCourses.includes(courseId)) {
      setSelectedCourses((prevSelected) => [...prevSelected, courseId]);
    } else {
      setSelectedCourses((prevSelected) =>
        prevSelected.filter((id) => id !== courseId)
      );
    }
  };

  const selectedSomeCourses = selectedCourses.length > 0 && selectedCourses.length < courses.length;
  const selectedAllCryptoOrders = selectedCourses.length === courses.length;
  const theme = useTheme();

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllCryptoOrders}
                  indeterminate={selectedSomeCourses}
                  onChange={handleSelectAllCourses}
                />
              </TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Lecturer</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => {
              const isCourseSelected = selectedCourses.includes(
                course.id
              );
              return (
                <TableRow
                  hover
                  key={course.id}
                  selected={isCourseSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isCourseSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneCourse(event, course.id)
                      }
                      value={isCourseSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {course.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {course.lecturer.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit Course" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Course" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

CourseTable.propTypes = {
  courses: PropTypes.array.isRequired
};

CourseTable.defaultProps = {
  courses: []
};

export default CourseTable;
