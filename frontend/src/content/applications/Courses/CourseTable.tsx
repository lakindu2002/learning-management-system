import { FC } from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Card,
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
import { Course } from 'src/models/course';
import { useNavigate } from 'react-router';
import { useAuth } from 'src/contexts/AuthContext';
import { InstituteUserRole } from 'src/models/user';

interface CourseTableProps {
  className?: string;
  courses: Course[];
}

const CourseTable: FC<CourseTableProps> = ({ courses }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Lecturer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => {
              return (
                <TableRow
                  hover
                  key={course.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    navigate(`/app/management/courses/${course.id}`)
                  }
                >
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
