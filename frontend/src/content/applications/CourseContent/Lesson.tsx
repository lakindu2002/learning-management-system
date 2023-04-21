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
import { useAuth } from 'src/contexts/AuthContext';
import { CourseLesson, LessonVisbility } from 'src/models/course';
import { InstituteUserRole } from 'src/models/user';
import { LessonManagePopper } from './LessonManagePopper';

interface LessonProps {
  lesson: CourseLesson;
  onUpdate: (patchAttr: Partial<CourseLesson>) => Promise<void>;
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

export const Lesson: FC<LessonProps> = ({ lesson, onUpdate }) => {
  const { user } = useAuth();

  const handleToggleVisibility = async () => {
    await onUpdate({
      visibility:
        lesson.visibility === LessonVisbility.VISIBLE
          ? LessonVisbility.HIDDEN
          : LessonVisbility.VISIBLE
    });
  };

  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h4">{lesson.title}</Typography>
            <Box
              sx={{ ml: 'auto', display: 'flex', gap: 1, alignItems: 'center' }}
            >
              {lesson.visibility === LessonVisbility.HIDDEN && (
                <Chip
                  label="Hidden from students"
                  color="warning"
                  sx={{ ml: 'auto' }}
                />
              )}
              {user?.currentInstitute.role !== InstituteUserRole.STUDENT && (
                <LessonManagePopper
                  lesson={lesson}
                  onToggleVisibility={handleToggleVisibility}
                />
              )}
            </Box>
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
