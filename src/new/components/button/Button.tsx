import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export const Button: React.FC<
  ButtonProps & {
    isSecondary?: boolean;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
  }
> = ({ isSecondary, children, sx, ...rest }) => (
  <MuiButton
    sx={{
      border: isSecondary ? '1px solid #2c2c2c' : '1px solid #ff6262',
      background: isSecondary ? '#212121' : '#ff0000',
      '&:hover': {
        background: isSecondary ? '#212121' : '#ff0000',
        border: '1px solid transparent',
      },
      ...sx,
    }}
    {...rest}
    variant="outlined"
  >
    {children}
  </MuiButton>
);
