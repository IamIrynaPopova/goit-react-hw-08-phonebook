import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import Box from '@mui/material/Box';

const Layout = () => {
  return (
    <>
      <Box
        sx={{
          mb: 5,
          backgroundColor: 'primary.dark',
          flexGrow: 1,
          p: 2,
          border: '1px dashed black',
        }}
      >
        <AppBar />
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
