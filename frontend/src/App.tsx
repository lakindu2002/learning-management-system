import { useRoutes } from 'react-router-dom';
import router from 'src/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <Toaster />
          {content}
        </LocalizationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;
