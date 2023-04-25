import { MoreVert } from '@mui/icons-material';
import {
  CircularProgress,
  ClickAwayListener,
  IconButton,
  MenuItem,
  Paper,
  Popper
} from '@mui/material';
import { FC, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { CourseLesson, LessonVisbility } from 'src/models/course';

interface LessonManagePopperProps {
  lesson: CourseLesson;
  onToggleVisibility: () => Promise<void>;
  onEditClick: () => void;
  isAssignmentMode?: boolean;
}

export const LessonManagePopper: FC<LessonManagePopperProps> = ({
  lesson,
  onEditClick,
  onToggleVisibility,
  isAssignmentMode = false
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const popperRef = useRef<HTMLButtonElement | null>(null);
  const [togglingVisibility, setTogglingVisibility] = useState<boolean>(false);

  const handleToggleVisibility = async () => {
    try {
      setTogglingVisibility(true);
      await onToggleVisibility();
      setOpen(false);
      toast.success(
        `This ${isAssignmentMode ? 'assignment' : 'lesson'} is now ${
          LessonVisbility.HIDDEN ? 'hidden' : 'visible'
        } for students.`
      );
    } catch (err) {
      toast.error('We ran into an error while updating its visibility.');
    } finally {
      setTogglingVisibility(false);
    }
  };

  const handleEditLesson = () => {
    onEditClick();
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)} ref={popperRef}>
        <MoreVert />
      </IconButton>
      <Popper
        open={open}
        anchorEl={popperRef.current}
        placement="bottom-start"
        style={{ zIndex: 1500 }}
      >
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Paper sx={{ p: 1 }}>
            <MenuItem onClick={handleToggleVisibility}>
              {togglingVisibility && (
                <CircularProgress size={'1rem'} sx={{ mr: 2 }} />
              )}
              Make{' '}
              {lesson.visibility === LessonVisbility.HIDDEN
                ? 'Visible'
                : 'Hidden'}
            </MenuItem>

            <MenuItem onClick={handleEditLesson}>
              Edit {isAssignmentMode ? 'Assignment' : 'Lesson'}
            </MenuItem>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
};
