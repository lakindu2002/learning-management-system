import * as yup from 'yup';
import { useFormik } from 'formik';

import {
  Typography,
  Button,
  Grid,
  TextField,
  Box,
  MenuItem
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from 'src/contexts/AuthContext';
import axios from 'src/lib/axios';
import { Course, Lesson, LessonCourse } from 'src/models/course';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInstituteUsers } from 'src/hooks/use-users';
import { InstituteUserRole } from 'src/models/user';
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
  BtnNumberedList,
  BtnStrikeThrough,
  BtnBulletList,
  BtnStyles,
  BtnClearFormatting
} from 'react-simple-wysiwyg';
import Label from 'src/components/Label';
import {
  ArticleOutlined,
  ImageOutlined,
  VideoFileOutlined
} from '@mui/icons-material';

type Props = {
  setOpen: Function;
  courseId: string;
};

const validationSchema = yup.object({
  title: yup.string().required('Title is required')
});

export default function AddEditLesson(props: Props) {
  const { setOpen, courseId } = props;
  const { user, logout } = useAuth();
  const {
    getInstituteUsers,
    users: lecturers,
    isLoading
  } = useInstituteUsers();
  const queryClient = useQueryClient();

  //   const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    getInstituteUsers('initial', InstituteUserRole.LECTURER);
  }, []);

  const createLesson = useMutation({
    mutationFn: (lessonCourse: LessonCourse) => {
      return axios.post(
        `/api/institutes/${user.institutes[0].id}/courses/${courseId}/lessons`,
        lessonCourse
      );
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['lessons'] });
    }
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      editorContent: '',
      lecVideo: {} as File,
      files: [] as File[],
      additionalFiles: [] as File[],
      additionalEditorContent: '',
      image: {} as File
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      const lessonCourse: LessonCourse = {
        courseId: courseId,
        lessonObj: {
          title: values.title,
          editorContent: values.editorContent
        }
      };

      createLesson.mutate(lessonCourse);
    }
  });

  useEffect(() => {
    if (createLesson.isSuccess) setOpen(false);
  }, [createLesson.isSuccess]);

  console.log('error', createLesson.error);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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
            Create New Lesson
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
          Main Content
        </Typography>

        <Typography fontWeight="normal" variant="h4">
          Description:{' '}
        </Typography>
        <EditorProvider>
          <Editor
            value={formik.values.editorContent}
            onChange={(event) =>
              formik.setFieldValue('editorContent', event.target.value)
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
              Upload Recording
              <input
                type="file"
                hidden
                accept="video/mp4,video/x-m4v,video/*"
                onChange={(event) => {
                  formik.setFieldValue(
                    'lecVideo',
                    event.currentTarget.files[0]
                  );
                }}
              />
            </Button>
          </Grid>
          <Grid item xs={9} my={2}>
            <Box display="flex" mt={1} ml={4}>
              {formik.values.lecVideo?.name && (
                <>
                  <VideoFileOutlined />
                  <Box paddingTop="1px" paddingLeft="3px">
                    <a href=""> {formik.values.lecVideo.name} </a>
                  </Box>
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs={3} my={2}>
            <Button variant="contained" component="label" fullWidth>
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(event) => {
                  formik.setFieldValue('image', event.currentTarget.files[0]);
                }}
              />
            </Button>
          </Grid>
          <Grid item xs={9} my={2}>
            <Box display="flex" mt={1} ml={4}>
              {formik.values.image?.name && (
                <>
                  <ImageOutlined />
                  <Box paddingTop="1px" paddingLeft="3px">
                    <a href=""> {formik.values.image.name} </a>
                  </Box>
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs={3} my={2}>
            <Button variant="contained" component="label" fullWidth>
              Upload Documents
              <input
                type="file"
                hidden
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                multiple
                onChange={(event) => {
                  formik.setFieldValue('files', event.currentTarget.files);
                }}
              />
            </Button>
          </Grid>
          <Grid item xs={9} my={2}>
            <Box display="flex" mt={1} ml={2}>
              {formik.values.additionalFiles &&
                Object.entries(formik.values.additionalFiles).map(
                  (file, index) => {
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
                  }
                )}
            </Box>
          </Grid>
        </Grid>

        <Typography
          sx={{
            my: 3
          }}
          variant="h3"
        >
          Additional Resources
        </Typography>

        <Typography variant="h4" fontWeight="normal">
          Description:{' '}
        </Typography>

        <EditorProvider>
          <Editor
            value={formik.values.additionalEditorContent}
            onChange={(event) =>
              formik.setFieldValue(
                'additionalEditorContent',
                event.target.value
              )
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
              Upload Documents
              <input
                type="file"
                hidden
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                multiple
                onChange={(event) => {
                  formik.setFieldValue(
                    'additionalFiles',
                    event.currentTarget.files
                  );
                }}
              />
            </Button>
          </Grid>
          <Grid item xs={9} my={2}>
            <Box display="flex" mt={1} ml={2}>
              {formik.values.additionalFiles &&
                Object.entries(formik.values.additionalFiles).map(
                  (file, index) => {
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
                  }
                )}
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
            loading={createLesson.isLoading}
          >
            Submit
          </LoadingButton>
        </Box>
      </form>
    </div>
  );
}
