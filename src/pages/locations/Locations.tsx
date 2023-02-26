import React from 'react';
import { Box, Container } from '@mui/material';
import ContainerDimensions from 'react-container-dimensions';

import { Map } from './Map';

export const Locations: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <ContainerDimensions>
        {({ width }) => <Map width={width} />}
      </ContainerDimensions>
    </Box>
  );
};
