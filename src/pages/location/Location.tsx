import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { ReactComponent as Arrow } from '../../icons/ArrowWhite.svg';
import { LOCATIONS } from '../../constants/contants';
import { Donate } from '../common/Donate';
import { Message } from '../../components/message/Message';

export const Location: React.FC = () => {
  const theme = useTheme();
  const { locationUrl } = useParams();
  const navigate = useNavigate();
  const intl = useIntl();
  const xs = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationUrl]);

  const location = Object.values(LOCATIONS).find(
    (place) => place.url === `/${locationUrl}`,
  );

  if (!location) return null;

  const description = intl
    .formatMessage({ id: location.description })
    .split('\n');
  const firstColParagraphsAmount = Math.ceil(description.length / 2);
  const descriptionPartOne = description
    .slice(0, firstColParagraphsAmount)
    .filter(Boolean)
    .join('\n\n');
  const descriptionPartTwo = description
    .slice(firstColParagraphsAmount)
    .filter(Boolean)
    .join('\n\n');

  return (
    <Box position="relative" minHeight="100%">
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 0,
          height: { xs: 284, sm: 384, md: 464 },
          overflow: 'hidden',
        }}
      >
        <Box
          position="absolute"
          sx={{
            width: '100%',
            height: '100%',
            background: '#101010',
            zIndex: 1,
            opacity: 0.7,
          }}
        />
        <img
          width="100%"
          src={location.imageSrc}
          alt={intl.formatMessage({ id: location.location })}
          style={{ minWidth: '100%', maxWidth: '100%' }}
        />
      </Box>
      <Container sx={{ zIndex: 1, position: 'relative' }}>
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
        <Typography variant="h2" color="white">
          <Message id={location.location} />
        </Typography>
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
        <Grid container spacing={6} sx={{ mt: 0 }}>
          <Grid item sm={12} md={6}>
            <Typography sx={{ whiteSpace: 'pre-line' }}>
              {descriptionPartOne}
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography sx={{ whiteSpace: 'pre-line' }}>
              {descriptionPartTwo}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/*<LiveTours heading="location.title.moreLiveTours" tours={[]} />*/}
      <Donate />
    </Box>
  );
};
