import {
  Alert,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Link,
  Typography
} from '@mui/material';
import { FC } from 'react';
import { CourseLesson, LessonVisbility } from 'src/models/course';

interface LessonProps {
  lesson: CourseLesson;
}

const fileIcons = {
  'application/pdf': <img src="/pdf-logo.png" width={40} />
};

const LessonFile: FC<{ file: { url: string; type: string; name: string } }> = ({
  file
}) => {
  return (
    <Link href={file.url} target="_blank">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          ':hover': {
            boxShadow: (theme) => theme.shadows[15],
            cursor: 'pointer'
          }
        }}
      >
        <Typography variant="h6" fontWeight={500} color="textPrimary">
          {file.name.split('.')[0]}
        </Typography>
        {fileIcons[file.type]}
      </Box>
    </Link>
  );
};

export const Lesson: FC<LessonProps> = ({ lesson }) => {
  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h4">{lesson.title}</Typography>
            {lesson.visibility === LessonVisbility.HIDDEN && (
              <Chip
                label="Hidden from students"
                color="warning"
                sx={{ ml: 'auto' }}
              />
            )}
          </Box>
        }
        subheader={lesson.description}
      />
      <CardContent>
        <Typography variant="h4">Learning Material</Typography>
        <Divider sx={{ my: 2 }} />
        {lesson.files?.map((file) => (
          <Box sx={{ my: 2 }} key={file.url}>
            <LessonFile file={file} />
          </Box>
        ))}
        {lesson.files?.length === 0 && (
          <Alert severity="info">
            There are no learning material available for this lesson
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};
