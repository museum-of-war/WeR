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
        sx={{ userSelect: 'none' }}
        position="relative"
        minHeight="100vh"
        width="100vw"
        overflow={"hidden"}
      >
        <Box
          position="absolute"
          zIndex={1}
          left={0}
          right={0}
          top={0}
          bottom={0}
          width="100%"
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
              height: "calc(100% + 80px)",
              marginTop: "-40px",
              objectFit: "cover"
            }}
          />
        </Box>
        <Box
          position="absolute"
          zIndex={2}
          left={0}
          right={0}
          top={0}
          bottom={0}
          height={"calc(100% + 80px)"}
          marginTop={"-40px"}
          sx={{
            bgcolor: 'primary.main',
            opacity: 0.7,
          }}
        />

        <Box zIndex={3}>
          <Container>
            <Box
              sx={{
                borderBottom: '2px solid #ffffff',
                pb: 12,
              }}
            />
          </Container>

          <Container>
            <h1>asdasds</h1>
            <h1>asdasds</h1>
            <h1>asdasds</h1>
            <h1>asdasds</h1>
          </Container>

          <Container>
            <Map />
          </Container>
        </Box>

      </Stack>
    </Container>
  );
};
