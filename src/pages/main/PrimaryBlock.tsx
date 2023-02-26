// @ts-nocheck
import React, { useEffect } from 'react';
import { Box, Theme, useMediaQuery } from '@mui/material';
import { SxProps } from '@mui/system';
import { theme } from '../../theme';

export const PrimaryBlock: React.FC = () => {
  const xs = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
      const inputRange = inputUpper - inputLower;
      const outputRange = outputUpper - outputLower;
      return (value) =>
        outputLower + (((value - inputLower) / inputRange) * outputRange || 0);
    };

    const target = document.querySelector('.parallax');

    const bounds = 20;
    const update = ({ x, y }) => {
      if ('ontouchstart' in window || navigator.msMaxTouchPoints) return;

      const posX = mapRange(0, window.innerWidth, -bounds, bounds)(x);
      const posY = mapRange(0, window.innerHeight, -bounds, bounds)(y);

      target.style.setProperty('--x', posX);
      target.style.setProperty('--y', posY);
    };

    document.addEventListener('pointermove', update);

    return () => {
      document.removeEventListener('pointermove', update);
    };
  }, []);

  return (
    <Box
      height={xs ? '50vh' : 'calc(100vh - 180px)'}
      width="100%"
      position="relative"
    >
      <Box position="relative" ml={xs ? 2 : 6} mr={xs ? 2 : 6} mb={xs ? 2 : 6}>
        <img
          src="/newImages/RawWar.png"
          style={{
            position: 'absolute',
            zIndex: 0,
            width: xs ? '100%' : '45%',
          }}
        />
      </Box>
      <Box sx={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
        <img
          className="parallax"
          src="/newImages/Building.png"
          style={{
            top: '15%',
            minWidth: '100%',
            position: 'absolute',
            width: xs ? '200%' : undefined,
            zIndex: 1,
            bottom: 0,
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height={20}
        display={xs ? 'block' : 'none'}
        sx={{
          background:
            'linear-gradient(0deg, rgba(16, 16, 16, 1) 0%, rgba(0, 0, 0, 0) 100%)',
          zIndex: 3,
        }}
      />
    </Box>
  );
};
