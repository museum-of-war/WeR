import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Map } from './Map';
import { Message } from '../../components/message/Message';

export const Heading: React.FC = () => {
  return (
    <Container
      sx={{
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        maxWidth: 'unset !important',
      }}
    >
      <Stack
        direction="column"
        sx={{ userSelect: 'none' }}
        position="relative"
        minHeight="100vh"
        width="100%"
        maxWidth="100%"
        overflow="hidden"
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
              width: '100%',
              height: 'calc(100% + 80px)',
              marginTop: '-40px',
              objectFit: 'cover',
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
          height="calc(100% + 80px)"
          mt={-5}
          sx={{
            bgcolor: 'primary.main',
            opacity: 0.7,
          }}
        />
        <Box zIndex={3} mb={12}>
          <Container>
            <Box
              sx={{
                borderBottom: '2px solid #ffffff',
                pb: 12,
              }}
            />
          </Container>
          <Container>
            <Stack
              direction="row"
              spacing={{ xs: 0, sm: 0, md: 6 }}
              mt={16}
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                },
                color: '#ffffff',
              }}
            >
              <Box sx={{ flex: 6, mb: { xs: 2, sm: 3, md: 0 } }}>
                <Typography variant="h1" mb={4}>
                  <Message id="heading.title" />
                </Typography>
                <Typography variant="h3">
                  <Message id="heading.subtitle" />
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flex: 3.5,
                  alignItems: 'flex-end',
                }}
              >
                <Typography fontSize="22px" lineHeight="32px">
                  <Message id="heading.description" />
                </Typography>
              </Box>
            </Stack>
          </Container>
          <Container>
            <Map />
          </Container>
        </Box>
      </Stack>
    </Container>
  );
};
