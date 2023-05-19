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
import { CourseAssignment, LessonFile } from 'src/models/course';
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
  courseId: string;
  mode?: 'create' | 'edit';
  initialValues?: Partial<CourseAssignment>;
  onUpdate?: (params: Partial<CourseAssignment>) => Promise<void>;
  createAssignment?: (params: Partial<CourseAssignment>) => Promise<void>;
};

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  submissionDate: yup.string().required('Submission Date is required'),
  weightage: yup
    .number()
    .required('Weightage is required.')
    .min(5, 'Weightage should be at least 5.')
});

export default function AddEditAssignment(props: Props) {
  const {
    setOpen,
    courseId,
    mode = 'create',
    onUpdate,
    initialValues,
    createAssignment
  } = props;
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [currentFiles, setCurrentFiles] = useState<LessonFile[]>(
    initialValues?.files || []
  );

  // const createAssignment = useMutation({
  //   mutationFn: (assignment: Partial<CourseAssignment>) => {
  //     return axios.post(
  //       `/api/institutes/${user?.currentInstitute.id}/courses/${courseId}/assignments`,
  //       assignment
  //     );
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['assignments'] });
  //   }
  // });

  const formik = useFormik({
    initialValues: {
      title: initialValues?.title || '',
      description: initialValues?.description || '',
      submissionDate: initialValues?.submissionDate || '',
      files: undefined as FileList,
      weightage: initialValues?.weightage || 0
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      const files = values.files as FileList;
      const fileUploads = Array.from(files || []).map(async (file) => {
        const resp = await uploadFile(file, 'course-assignments');
        return { url: resp.url, type: resp.type, name: file.name };
      });
      const fileData = await Promise.all(fileUploads);
      const assignmentCourse: Partial<CourseAssignment> = {
        courseId,
        title: values.title,
        description: values.description,
        files: [...currentFiles, ...fileData],
        instituteId: user?.currentInstitute.id,
        submissionDate: values.submissionDate,
        weightage: values.weightage
      };
      if (mode === 'create') {
        await createAssignment(assignmentCourse);
        setOpen(false);
        return;
      }
      try {
        await onUpdate(assignmentCourse);
        setOpen(false);
      } catch (err) {
        toast.error('We could not update the assignment.');
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
            {mode === 'create' ? 'Create New Assignment' : 'Edit Assignment'}
          </Typography>
        </Box>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Assignment Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          margin="dense"
        />

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="date"
              label="Submission Date"
              type="date"
              value={formik.values.submissionDate}
              onChange={(event) =>
                formik.setFieldValue('submissionDate', event.target.value)
              }
              InputLabelProps={{
                shrink: true
              }}
              sx={{ marginTop: 3 }}
              error={
                formik.touched.submissionDate &&
                Boolean(formik.errors.submissionDate)
              }
              helperText={
                formik.touched.submissionDate && formik.errors.submissionDate
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="weightage"
              label="Weightage of Assignment"
              type="number"
              placeholder="This is the total marks (weight) of the assignment."
              value={formik.values.weightage}
              onChange={formik.handleChange}
              InputLabelProps={{
                shrink: true
              }}
              sx={{ marginTop: 3 }}
              margin="dense"
              error={
                formik.touched.weightage && Boolean(formik.errors.weightage)
              }
              helperText={formik.touched.weightage && formik.errors.weightage}
            />
          </Grid>
        </Grid>

        <Typography
          sx={{
            my: 3
          }}
          variant="h3"
        >
          Instructions
        </Typography>

        <EditorProvider>
          <Editor
            placeholder="Start editing here..."
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
              Upload Instruction Material
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
            {mode === 'create' ? 'Create Assignment' : 'Update Assignment'}
          </LoadingButton>
        </Box>
      </form>
    </div>
  );
}
