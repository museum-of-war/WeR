/* eslint-disable */
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { LOCATIONS } from '../../constants/contants';

export const Heading: React.FC = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const cities = useMemo(() => {
    return [
      'War as it sees',
      ...Object.values(LOCATIONS).map((place) => place.shortLocation),
    ];
  }, []);

  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  useLayoutEffect(() => {
    // todo @current add typing animation
    setTimeout(() => {
      if (textRef.current) {
        setCurrentLocationIndex(
          cities[currentLocationIndex + 1] ? currentLocationIndex + 1 : 0,
        );

        // textRef.current.style.animation = 'none';
        // textRef.current.offsetHeight;
        // // @ts-ignore
        // textRef.current.style.animation = null;
      }
    }, 6000);
  }, [currentLocationIndex]);

  return (
    <Container>
      <Stack direction="column" alignItems="center" position="relative">
        <Box overflow="hidden" width="100%" height={464}>
          <video
            src="/videos/MainBanner.mp4"
            webkit-playsinline="true"
            controls={false}
            muted
            loop
            autoPlay
            style={{ width: '100%', marginTop: -128 }}
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
          position="absolute"
          zIndex={2}
          left={0}
          right={0}
          top={0}
          bottom={0}
          alignItems="center"
          justifyContent="center"
          display="inline-flex"
          direction="row"
        >
          <Typography
            variant="h1"
            color="white"
            // className="typing-text"
            ref={textRef}
            // style={{
            //   animation: `typing 1s steps(${
            //     cities[currentLocationIndex].length - 4
            //   })`,
            // }}
          >
            {cities[currentLocationIndex]}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        mt={16}
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        <Stack direction="column" flexBasis="35%" pr={6}>
          <Typography variant="h2">You Need A Look Not A Ride</Typography>
          <Typography mt={4}>
            Take a safe look at the unsafe cities of Ukraine after their
            deoccupation as if you were there right now. Due to Russian
            unprovoked and inhuman invasion, Ukrainians are fighting for
            freedom, human rights and safety of democracy. Your eyes wide open
            matters.
          </Typography>
        </Stack>
        <Stack flexBasis="65%">
          <img src="/images/map.png" alt="map" style={{ maxWidth: '100%' }} />
        </Stack>
      </Stack>
    </Container>
  );
};
