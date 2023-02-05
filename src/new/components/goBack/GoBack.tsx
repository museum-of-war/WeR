import React from 'react';
import { Stack, Link, Typography, Box } from '@mui/material';

import { ReactComponent as Back } from '../../icons/Back.svg';
import { Message, TranslationKey } from '../../../components/message/Message';

export const GoBack: React.FC<{ text: TranslationKey; location: string }> = ({
  text,
  location,
}) => {
  return (
    <Box height={60}>
      <Box height="100%" display="inline-block">
        <Link
          href={location}
          alignItems="center"
          flexDirection="row"
          display="flex"
          height="100%"
        >
          <Back />
          <Typography ml={1.5}>
            <Message id={text} />
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
