import { useRoutes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import router from 'src/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { useEffect } from 'react';
import { hotjar, hotjarConfig } from './lib/hotjar';

function App() {
  const content = useRoutes(router);
  const queryClient = new QueryClient();

  useEffect(() => {
    hotjar.initialize(hotjarConfig as any);
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <Toaster />
            {content}
          </LocalizationProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
export default App;
