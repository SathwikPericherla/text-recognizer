import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export function Loader() {
  return (
    <Box sx={{ width: 400 }}>
      <Skeleton sx={{ bgcolor: '#646cde' }} />
      <Skeleton  sx={{ bgcolor: '#646cde' }} />
      <Skeleton  sx={{ bgcolor: '#646cde' }} width={250} />
    </Box>
  );
}
