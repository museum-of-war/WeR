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
        background: isSecondary ? '#303030' : '#e80000',
        border: isSecondary ? '1px solid #2c2c2c' : '1px solid #ff6262',
      },
      '&:active': {
        background: isSecondary ? '#161616' : '#b10000',
        border: isSecondary ? '1px solid #2c2c2c' : '1px solid #ff6262',
      },
      ...sx,
    }}
    {...rest}
    variant="outlined"
  >
    {children}
  </MuiButton>
);
