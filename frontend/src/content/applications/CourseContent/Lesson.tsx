import {
  Alert,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Typography
} from '@mui/material';
import { FC } from 'react';
import HtmlToReact from 'html-to-react';

import { useAuth } from 'src/contexts/AuthContext';
import { CourseLesson, LessonVisbility } from 'src/models/course';
import { InstituteUserRole } from 'src/models/user';
import { LessonManagePopper } from './LessonManagePopper';
import { LessonFileViewer } from './LessonFileViewer';

interface LessonProps {
  lesson: CourseLesson;
  onUpdate: (patchAttr: Partial<CourseLesson>) => Promise<void>;
  onDelete: () => Promise<void>;
  onEdit: () => void;
}
export const Lesson: FC<LessonProps> = ({
  lesson,
  onUpdate,
  onEdit,
  onDelete
}) => {
  const { user } = useAuth();

  const handleToggleVisibility = async () => {
    await onUpdate({
      visibility:
        lesson.visibility === LessonVisbility.VISIBLE
          ? LessonVisbility.HIDDEN
          : LessonVisbility.VISIBLE
    });
  };

  const handleEditLesson = () => {
    onEdit();
  };

  const handleDeleteLesson = async () => {
    await onDelete();
  };

  const HtmlToReactParser = HtmlToReact.Parser;
  const htmlToReactParser = new HtmlToReactParser();

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
                  onEditClick={handleEditLesson}
                  onDelete={handleDeleteLesson}
                  onToggleVisibility={handleToggleVisibility}
                />
              )}
            </Box>
          </Box>
        }
        subheader={htmlToReactParser.parse(lesson.description)}
      />
      <CardContent>
        <Typography variant="h4">Learning Material</Typography>
        <Divider sx={{ my: 2 }} />
        {lesson.files?.map((file) => (
          <Box sx={{ my: 2 }} key={file.url}>
            <LessonFileViewer file={file} />
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
