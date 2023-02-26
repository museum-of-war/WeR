import React from 'react';
import { Box, Link, Stack, Theme, Typography } from '@mui/material';
import { ReactComponent as CardLink } from '../../icons/CardLink.svg';
import { Message } from '../message/Message';
import { Location } from '../../constants/constants';
import { SxProps } from '@mui/material/styles';

export const Card: React.FC<{
  location: Location;
  width: string | number;
  sx?: SxProps<Theme>;
}> = ({ location, width, sx }) => {
  return (
    <Box
      sx={{
        padding: '0 8px',
        minWidth: width,
        width,
        height: 275,
        minHeight: 275,
        display: 'inline-block',
        boxSizing: 'border-box',
        ...sx,
      }}
    >
      <Link href={`/location/${location.region}/${location.id}`}>
        <Stack
          sx={{
            borderRadius: '8px',
            height: '100%',
            width: '100%',
            background: 'red',
            boxSizing: 'border-box',
            backgroundImage: `url(${location.imageSrc})`,
            backgroundSize: 'cover',
            position: 'relative',
            ':hover .darken': {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              border: '3px solid #eaeaea',
            },
          }}
        >
          <Stack
            className="darken"
            sx={{
              background:
                'linear-gradient(0deg, rgba(16, 16, 16, 0.64), rgba(16, 16, 16, 0.64))',
              position: 'absolute',
              top: '-3px',
              left: '-3px',
              right: '-3px',
              bottom: '-3px',
              zIndex: 0,
              borderRadius: '8px',
            }}
          />
          <Stack
            position="absolute"
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              right: 8,
              bottom: 8,
              zIndex: 1,
            }}
          >
            <Box marginLeft="auto">
              <CardLink />
            </Box>
            <Typography
              variant="h2"
              color="#eaeaea"
              textTransform="uppercase"
              textAlign="justify"
              whiteSpace="normal"
              marginTop="auto"
              sx={{
                wordBreak: 'break-word',
              }}
            >
              <Message id={location.location} />
            </Typography>
          </Stack>
        </Stack>
      </Link>
    </Box>
  );
};
