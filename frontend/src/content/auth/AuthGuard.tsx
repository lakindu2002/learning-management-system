import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Logo from 'src/components/LogoSign';
import { useAuth } from 'src/contexts/AuthContext';
import LoginPage from '../pages/Login';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated, isInitialized } = useAuth();
  const [allowAccess, setAllowAccess] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();


  const { pathname } = location;

  useEffect(() => {
    if (!pathname.startsWith('/app')) {
      // user accessing outside app
      if (isAuthenticated) {
        // authenticated, directly navigate into app
        navigate('/app');
        return;
      }
      setAllowAccess(false);
      return;
    }
    if (isAuthenticated) {
      setAllowAccess(true);
      return;
    }
    setAllowAccess(false);
  }, [isAuthenticated, pathname, navigate]);

  if (!isInitialized) {
    return (
      <Box
        sx={{
          justifyContent: 'center',
          height: '100vh',
          alignItems: 'center',
          display: 'flex',
          width: '100%'
        }}
      >
        <Logo />
      </Box>
    )
  }

  if (allowAccess) {
    return <>{children}</>;
  }
  return <LoginPage />;
};
