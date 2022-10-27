import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ReactComponent as Arrow } from '../../icons/arrow.svg';
import { Message, TranslationKey } from '../message/Message';

type CardProps = {
  data: {
    location: TranslationKey;
    imageSrc: string;
    isLive?: boolean;
    url?: string;
    p360src?: string;
  };
  disableArrow?: boolean;
};
export const Card: React.FC<CardProps> = ({ data, disableArrow }) => {
  const [showArrow, setShowArrow] = useState(false);

  return (
    <Stack
      direction="column"
      sx={{
        borderTop: '2px solid #101010',
        borderBottom: '2px solid #101010',
        cursor: 'pointer',
        height: '100%',
      }}
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
      position="relative"
    >
      {data.isLive && (
        <Stack
          position="absolute"
          left={0}
          top={48}
          bgcolor="primary.main"
          alignItems="center"
          direction="row"
        >
          <Box
            height={8}
            width={8}
            borderRadius={4}
            sx={{ backgroundColor: '#DE4646' }}
            ml={2}
          />
          <Typography variant="body2" color="white" ml={1} mr={2}>
            <Message id="card.liveNow" />
          </Typography>
        </Stack>
      )}
      <img
        src={data.imageSrc}
        alt=""
        style={{ marginTop: 48, width: '100%' }}
      />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" mt={4} mb={6} color="primary.main">
          <Message id={data.location} />
        </Typography>
        {showArrow && !disableArrow && <Arrow />}
      </Stack>
    </Stack>
  );
};
