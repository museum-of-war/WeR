import React from 'react';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { ReactComponent as ButtonArrow } from '../../icons/ButtonArrow.svg';
import { Button } from '../../components/button/Button';
import { theme } from '../../theme';
import { Message } from '../../../components/message/Message';

export const SecondaryBlock: React.FC = () => {
  const xs = useMediaQuery(theme.breakpoints.down('sm'));
  const sm = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Stack
      direction="column"
      mt={xs ? 3 : 0}
      position={xs ? 'unset' : 'absolute'}
      width={xs ? '100%' : sm ? 'calc(50% - 48px)' : 456}
      maxWidth={xs ? '100%' : '50%'}
      right={xs ? 0 : 72}
      top={0}
      zIndex={3}
    >
      <Typography
        variant="h1"
        textTransform="uppercase"
        color="#404040"
        textAlign="justify"
      >
        <Box component="span" color="#eaeaea">
          <Message id="new.main.description1" />{' '}
        </Box>
        <Message id="new.main.description2" />
      </Typography>
      <Button sx={{ mt: 1.5 }} href="/locations">
        <>
          <Message id="new.main.button.explore" /> <ButtonArrow />
        </>
      </Button>
      <Stack direction="row" justifyContent="space-between">
        <Button
          sx={{ mt: 1.5, display: 'flex', flexBasis: '50%' }}
          isSecondary
          href="/about"
        >
          <>
            <Message id="new.main.button.about" /> <ButtonArrow />
          </>
        </Button>
        <Box width={12} />
        <Button
          sx={{ mt: 1.5, display: 'flex', flexBasis: '50%' }}
          isSecondary
          href="/support"
        >
          <>
            <Message id="new.main.button.support" /> <ButtonArrow />
          </>
        </Button>
      </Stack>
    </Stack>
  );
};
