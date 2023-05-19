import React, { useEffect, useRef, useState } from 'react';
import { Box, Button } from '@mui/material';
import { ArticleOutlined } from '@mui/icons-material';
import { LessonFileViewer } from './LessonFileViewer';
import { LoadingButton } from '@mui/lab';

const FileUpload = ({ onSubmit, initialFile, isLoading }) => {
  const [file, setFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (initialFile) {
      setFile(initialFile);
      setIsSubmitted(true);
    }
  }, [initialFile]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    event.target.value = null;
  };

  const handleRemove = () => {
    setFile(null);
  };

  const handleSubmit = () => {
    if (!file) return;
    setIsSubmitted(true);
    onSubmit(file);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <Box
      sx={{
        border: '1px dotted white',
        padding: '10px',
        backgroundColor: '#001133',
        borderRadius: '8px'
      }}
    >
      {!isSubmitted ? (
        <>
          <Button
            variant="contained"
            component="label"
            fullWidth
            color="secondary"
          >
            {file ? 'Change File' : 'Add File'}
            <input
              type="file"
              hidden
              ref={fileInputRef}
              accept=".xlsx,.xls,image/jpeg,image/png,image/svg,image/jpg,image/gif,.doc, .docx,.ppt, .pptx,.txt,.pdf"
              onChange={handleFileChange}
            />
          </Button>
          {file && (
            <Box sx={{ mt: 3 }}>
              <LessonFileViewer file={file} />

              <Button
                variant="contained"
                color="warning"
                onClick={handleRemove}
                sx={{ mt: 3 }}
              >
                Remove File
              </Button>
            </Box>
          )}
          <Box sx={{ mt: 10 }}>
            <LoadingButton
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
              loading={isLoading}
            >
              Submit
            </LoadingButton>
          </Box>
        </>
      ) : (
        <>
          <Box mb={2}>
            <LessonFileViewer file={file} />
          </Box>

          <Button variant="outlined" color="primary" onClick={handleEdit}>
            Edit Submission
          </Button>
        </>
      )}
    </Box>
  );
};

export default FileUpload;
