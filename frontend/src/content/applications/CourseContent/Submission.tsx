import * as yup from 'yup';
import { useFormik } from 'formik';
import {
  Typography,
  Button,
  Grid,
  TextField,
  Box,
  IconButton
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from 'src/contexts/AuthContext';
import axios from 'src/lib/axios';
import {
  CourseAssignment,
  CourseSubmissionStudent,
  LessonFile
} from 'src/models/course';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import {
  BtnBold,
  BtnItalic,
  BtnLink,
  Editor,
  EditorProvider,
  Separator,
  Toolbar,
  BtnUnderline,
  BtnUndo,
  BtnRedo,
  BtnStyles
} from 'react-simple-wysiwyg';
import { ArticleOutlined, Close } from '@mui/icons-material';
import { uploadFile } from 'src/hooks/use-storage';
import { toast } from 'react-hot-toast';
import { LessonFileViewer } from './LessonFileViewer';

type Props = {
  setOpen: Function;
  initialValues?: Partial<CourseSubmissionStudent>;
  onUpdate?: (params: Partial<CourseSubmissionStudent>) => Promise<void>;
};

export default function Submission(props: Props) {
  const { setOpen, onUpdate, initialValues } = props;
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [currentFiles, setCurrentFiles] = useState<LessonFile>(
    initialValues?.file
  );

  const validationSchema = yup.object({
    feedback: yup.string().required('Feedback is required'),
    marks: yup
      .number()
      .required('Weightage is required.')
      .min(0, 'Marks should be at least 0.')
      .max(
        initialValues.weightage,
        'Marks should not be greater than the assigned weightage.'
      )
  });

  const formik = useFormik({
    initialValues: {
      marks: initialValues?.marks,
      feedback: initialValues?.feedback || ''
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      const submission: Partial<CourseSubmissionStudent> = {
        marks: values.marks ? values.marks : undefined,
        feedback: values.feedback,
        graded: true,
        file: initialValues.file
      };

      try {
        await onUpdate(submission);
        setOpen(false);
        toast.success('Successfully updated grading.');
      } catch (err) {
        toast.error('We could not update the student submission.');
      }
    }
  });

  return (
    <div>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Box
          pb={4}
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          textAlign={{ xs: 'left', md: 'center' }}
          justifyContent="center"
        >
          <Typography
            sx={{
              mb: 1,
              mt: 2
            }}
            variant="h2"
          >
            Student Grading & Feedback
          </Typography>
        </Box>
        <TextField
          fullWidth
          id="feedback"
          name="feedback"
          label="Feedback"
          value={formik.values.feedback}
          onChange={formik.handleChange}
          error={formik.touched.feedback && Boolean(formik.errors.feedback)}
          helperText={formik.touched.feedback && formik.errors.feedback}
          margin="dense"
        />

        <TextField
          type="number"
          fullWidth
          id="marks"
          name="marks"
          label="marks"
          value={formik.values.marks}
          onChange={formik.handleChange}
          error={formik.touched.marks && Boolean(formik.errors.marks)}
          helperText={formik.touched.marks && formik.errors.marks}
          margin="dense"
        />

        <Box
          pt={2}
          display={{ xs: 'block', md: 'flex' }}
          alignItems="center"
          textAlign={{ xs: 'left', md: 'center' }}
          justifyContent="center"
        >
          <Button
            variant="outlined"
            onClick={() => setOpen(false)}
            sx={{ mr: 2 }}
            fullWidth
          >
            Cancel
          </Button>

          <LoadingButton
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
            loading={formik.isSubmitting}
          >
            Submit
          </LoadingButton>
        </Box>
      </form>
    </div>
  );
}
