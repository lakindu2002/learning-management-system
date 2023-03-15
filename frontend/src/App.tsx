import React from 'react';
import {
  Button,
  createTheme, CssBaseline, ThemeProvider, Typography,
} from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <>
        <CssBaseline />
        <Typography>
          Hello from MUI
        </Typography>
        <Button
          variant="contained"
        >
          Click Me!
        </Button>
      </>
    </ThemeProvider>
  );
}

export default App;
