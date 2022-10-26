import React from 'react';
import {
  Box,
  Container,
  Stack,
} from '@mui/material';
import { Map } from "./Map";

export const Heading: React.FC = () => {
  return (
    <Container
        sx={{
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          maxWidth: "unset !important"
        }}
    >
      <Stack
        direction="column"
        alignItems="center"
        position="relative"
        sx={{ userSelect: 'none' }}
      >
        <Box
          overflow="hidden"
          width="100%"
          height="100vh"
          className="video-trimmer"
        >
          <video
            src="/videos/MainBanner.mp4"
            className="heading-video"
            webkit-playsinline="true"
            controls={false}
            muted
            loop
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </Box>
        <Box
          position="absolute"
          zIndex={1}
          left={0}
          right={0}
          top={0}
          bottom={0}
          sx={{
            bgcolor: 'primary.main',
            opacity: 0.7,
          }}
        />
        <Stack
            direction="column"
            position="absolute"
            zIndex={1}
            left={0}
            right={0}
            top={0}
            bottom={0}
        >
          <Container>
            <Box
                sx={{
                  borderBottom: '2px solid #ffffff',
                  pb: 12,
                }}
            />
          </Container>

          <Container>
            <Map />
          </Container>
        </Stack>
      </Stack>
    </Container>
  );
};
