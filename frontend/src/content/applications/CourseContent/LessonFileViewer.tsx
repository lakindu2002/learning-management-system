import { Box, Link, Typography } from '@mui/material';
import { FC } from 'react';
import { LessonFile } from 'src/models/course';

const fileIcons = {
  'application/pdf': <img src="/pdf-logo.png" width={40} />,
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': (
    <img src="/word-logo.png" width={40} />
  ),
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': (
    <img src="/excel-logo.svg" width={40} />
  ),
  'image/jpeg': <img src="/photos-icon.png" width={40} />,
  'image/jpg': <img src="/photos-icon.png" width={40} />,
  'image/svg': <img src="/photos-icon.png" width={40} />,
  'image/png': <img src="/photos-icon.png" width={40} />,
  'image/gif': <img src="/photos-icon.png" width={40} />,
};

export const LessonFileViewer: FC<{ file: LessonFile }> = ({ file }) => {
  console.log(file.type);
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
        {fileIcons[file.type]}
        <Typography variant="h6" fontWeight={500} color="textPrimary">
          {file.name.split('.')[0]}
        </Typography>
      </Box>
    </Link>
  );
};
