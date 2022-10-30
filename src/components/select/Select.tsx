import React from 'react';
import { Select as MuiSelect, SelectProps, Stack } from '@mui/material';
import { ReactComponent as DropdownIcon } from '../../icons/arrow-dropdown.svg';

export const Select: React.FC<SelectProps> = ({ children, ...props }) => (
  <Stack position="relative">
    <MuiSelect {...props} sx={{ ...props.sx, position: 'relative', zIndex: 2 }}>
      {children}
    </MuiSelect>
    <DropdownIcon
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        zIndex: 1,
      }}
    />
  </Stack>
);
Select.defaultProps = {
  variant: 'standard',
};
