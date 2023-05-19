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
import { CourseLesson, LessonFile } from 'src/models/course';
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
import { useCourseAssignments } from 'src/hooks/use-course-assignment';
import { useCourseLessons } from 'src/hooks/use-course-lessons';

type Props = {
  setOpen: Function;
  courseId: string;
  mode?: 'create' | 'edit';
  initialValues?: Partial<CourseLesson>;
  onUpdate?: (params: Partial<CourseLesson>) => Promise<void>;
  createLesson?: (lesson: Partial<CourseLesson>) => Promise<void>;
};

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required')
});

export default function AddEditLesson(props: Props) {
  const {
    setOpen,
    courseId,
    mode = 'create',
    onUpdate,
    initialValues,
    createLesson
  } = props;
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [currentFiles, setCurrentFiles] = useState<LessonFile[]>(
    initialValues?.files || []
  );

  const formik = useFormik({
    initialValues: {
      title: initialValues?.title || '',
      description: initialValues?.description || '',
      files: undefined as FileList
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      const files = values.files as FileList;
      const fileUploads = Array.from(files || []).map(async (file) => {
        const resp = await uploadFile(file, 'course-content');
        return { url: resp.url, type: resp.type, name: file.name };
      });
      const fileData = await Promise.all(fileUploads);
      const lessonCourse: Partial<CourseLesson> = {
        courseId,
        title: values.title,
        description: values.description,
        files: [...currentFiles, ...fileData],
        instituteId: user?.currentInstitute.id
      };
      if (mode === 'create') {
        // createLesson.mutate(lessonCourse);
        await createLesson(lessonCourse);
        setOpen(false);
        return;
      }
      try {
        await onUpdate(lessonCourse);
        setOpen(false);
      } catch (err) {
        toast.error('We could not update the content');
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
            {mode === 'create' ? 'Create New Lesson' : 'Edit Lesson'}
          </Typography>
        </Box>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Lesson Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          margin="dense"
        />

        <Typography
          sx={{
            my: 3
          }}
          variant="h3"
        >
          Content
        </Typography>

        <EditorProvider>
          <Editor
            placeholder="What is this lesson about?"
            value={formik.values.description}
            onChange={(event) =>
              formik.setFieldValue('description', event.target.value)
            }
          >
            <Toolbar>
              <BtnUndo />
              <BtnRedo />
              <Separator />
              <BtnBold />
              <BtnItalic />
              <BtnUnderline />
              <Separator />
              <BtnLink />
              <Separator />
              <BtnStyles />
            </Toolbar>
          </Editor>
        </EditorProvider>
        <Grid container mt={2}>
          <Grid item xs={3} my={2}>
            <Button variant="contained" component="label" fullWidth>
              Upload Material
              <input
                type="file"
                hidden
                accept=".xlsx,.xls,image/jpeg,image/png,image/svg,image/jpg,image/gif,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                multiple
                onChange={(event) => {
                  formik.setFieldValue('files', event.currentTarget.files);
                }}
              />
            </Button>
          </Grid>
          <Grid item xs={12} my={2}>
            <Box mt={1} ml={2}>
              {currentFiles.map((file) => (
                <Box
                  key={file.url}
                  sx={{ my: 1, display: 'flex', gap: 1, alignItems: 'center' }}
                >
                  <LessonFileViewer file={file} />
                  <IconButton
                    onClick={() => {
                      setCurrentFiles((prev) =>
                        prev.filter((listFile) => file.url !== listFile.url)
                      );
                    }}
                  >
                    <Close />
                  </IconButton>
                </Box>
              ))}
              {formik.values.files &&
                Object.entries(formik.values.files).map((file, index) => {
                  return (
                    <Box
                      key={`${file[1].name} + ${index}`}
                      ml={2}
                      display="flex"
                    >
                      <ArticleOutlined />
                      <Box paddingTop="1px" paddingLeft="3px">
                        <a href=""> {file[1].name} </a>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
          </Grid>
        </Grid>

        <Box
          pt={4}
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
            {mode === 'create' ? 'Create Lesson' : 'Update Lesson'}
          </LoadingButton>
        </Box>
      </form>
    </div>
  );
}
