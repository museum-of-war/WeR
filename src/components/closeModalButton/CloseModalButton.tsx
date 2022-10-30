import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { ReactComponent as CloseIcon } from '../../icons/close-icon.svg';
import { theme } from '../../theme';

type CloseModalButtonProps = { onClick: () => void };
export const CloseModalButton: React.FC<CloseModalButtonProps> = ({
  onClick,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box onClick={onClick} position="absolute" top={32} right={32}>
      <CloseIcon
        style={{ width: isMobile ? 24 : 34, height: isMobile ? 24 : 34 }}
      />
    </Box>
  );
};
