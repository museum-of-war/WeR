import React, { useEffect } from 'react';
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { ReactComponent as Arrow } from '../../icons/arrow-white.svg';
import { TOURS } from '../../constants/constants';
import { Donate } from '../common/Donate';
import { Message } from '../../components/message/Message';

export const Location: React.FC = () => {
  const theme = useTheme();
  const { locationUrl } = useParams();
  const navigate = useNavigate();
  const intl = useIntl();
  const xs = useMediaQuery(theme.breakpoints.down('sm'));
  const isIos = !!navigator.platform.match(/iPhone|iPod|iPad/);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationUrl]);

  const location = TOURS.find((tour) => tour.url === `/${locationUrl}`);

  if (!location) return null;

  // const description = intl
  //   .formatMessage({ id: location.description })
  //   .split('\n');
  // const firstColParagraphsAmount = Math.ceil(description.length / 2);
  // const descriptionPartOne = description
  //   .slice(0, firstColParagraphsAmount)
  //   .filter(Boolean)
  //   .join('\n\n');
  // const descriptionPartTwo = description
  //   .slice(firstColParagraphsAmount)
  //   .filter(Boolean)
  //   .join('\n\n');

  return (
    <Box>
      <Box position="relative">
        <Box
          sx={{
            backgroundImage: `url(${location.imageSrc})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'absolute',
            top: 0,
            bottom: 0,
            zIndex: 0,
            left: 0,
            right: 0,
            filter: 'blur(4px)',
          }}
        />
        <Box
          sx={{
            opacity: 0.7,
            position: 'absolute',
            background: '#101010',
            top: 0,
            bottom: 0,
            zIndex: 1,
            left: 0,
            right: 0,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Box
            sx={{
              borderBottom: '2px solid #ffffff',
              pb: 12,
            }}
          />
          <Stack direction="row" alignItems="center" my={6}>
            <IconButton onClick={() => navigate('/')} sx={{ ml: -1 }}>
              <Arrow height={xs ? 24 : 48} width={xs ? 24 : 48} />
            </IconButton>
            <Typography
              variant="body2"
              ml={2}
              color="white"
              onClick={() => navigate('/')}
              sx={{ cursor: 'pointer' }}
            >
              Back
            </Typography>
          </Stack>
          <Typography variant="h2" color="white" pb={6}>
            <Message id={location.location} />
          </Typography>
        </Container>
      </Box>
      <Container>
        {isIos && (
          <Stack
            py={4}
            px={1}
            mt={2}
            sx={{ background: '#E93324', color: 'white' }}
          >
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
              <Message id="warning.youtube" />
              <YouTubeIcon sx={{ ml: 1 }} fontSize="large" />
            </Typography>
          </Stack>
        )}
        {location.videoSrc.startsWith('https://www.youtube.com/') ? (
          <Box
            position="relative"
            sx={{ paddingBottom: '56.25%', height: 0, marginTop: '40px' }}
          >
            <iframe
              width="100%"
              height="720"
              src={location.videoSrc}
              title={intl.formatMessage({ id: location.location })}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        ) : (
          <video
            src={location.videoSrc}
            width="100%"
            style={{ marginTop: 40 }}
            controls
          />
        )}
        {/*<Grid container spacing={6} sx={{ mt: 0 }}>*/}
        {/*  <Grid item sm={12} md={6}>*/}
        {/*    <Typography sx={{ whiteSpace: 'pre-line' }}>*/}
        {/*      {descriptionPartOne}*/}
        {/*    </Typography>*/}
        {/*  </Grid>*/}
        {/*  <Grid item sm={12} md={6}>*/}
        {/*    <Typography sx={{ whiteSpace: 'pre-line' }}>*/}
        {/*      {descriptionPartTwo}*/}
        {/*    </Typography>*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
        {/*<LiveTours heading="location.title.moreLiveTours" tours={[]} />*/}
      </Container>
      <Donate />
    </Box>
  );
};
