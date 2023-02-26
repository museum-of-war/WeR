import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { ReactComponent as CloseIcon } from '../../icons/Close.svg';
import { theme } from '../../theme';

type CloseModalButtonProps = { onClick: () => void };
export const CloseModalButton: React.FC<CloseModalButtonProps> = ({
  onClick,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      onClick={onClick}
      position="absolute"
      top={10}
      right={10}
      sx={{ cursor: 'pointer' }}
    >
      <CloseIcon style={{ width: 12, height: 12 }} />
    </Box>
  );
};
