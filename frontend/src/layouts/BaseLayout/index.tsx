import { FC, ReactNode, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import { hotjar } from 'react-hotjar';

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  useEffect(() => {
    hotjar.initialize(3496308, 6);
  }, []);
  return (
    <Box
      sx={{
        flex: 1,
        height: '100%'
      }}
    >
      {children || <Outlet />}
    </Box>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node
};

export default BaseLayout;
