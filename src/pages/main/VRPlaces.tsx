import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Stack } from '@mui/material';
import { ReactComponent as Arrow } from '../../icons/arrow.svg';
import { Card } from '../../components/card/Card';
import { VR_PLACES, VR_PLACES_CLASS_NAME } from '../../constants/contants';
import { Message, TranslationKey } from '../../components/message/Message';
import { VideoModal } from '../common/VideoModal';

export const VRPlaces: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    videoSrc: '',
    location: '' as TranslationKey,
  });

  const handleOpen = useCallback(
    ({
      videoSrc,
      location,
    }: {
      videoSrc: string;
      location: TranslationKey;
    }) => {
      setData({ videoSrc, location });
      setOpen(true);
    },
    [],
  );

  const itemsToRender =
    VR_PLACES.length > 8 ? VR_PLACES.slice(0, 8) : VR_PLACES;

  return (
    <Container
      sx={{
        mt: {
          xs: 8,
          sm: 12,
          md: 16,
        },
      }}
      className={VR_PLACES_CLASS_NAME}
    >
      <Stack
        flex={1}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h2">
          <Message id="vrplaces.title" />
        </Typography>
        {VR_PLACES.length > 8 && (
          <Link
            to="/vr-places"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" mr="19px" color="primary.main">
              <Message id="vrplaces.seeAllPlaces" />
            </Typography>
            <Arrow />
          </Link>
        )}
      </Stack>
      <Grid container spacing={6} sx={{ mt: 0 }} className="cards">
        {itemsToRender.map((place) => (
          <Grid
            item
            key={place.location}
            xs={6}
            sm={3}
            className="card"
            onClick={() =>
              handleOpen({ videoSrc: place.videoSrc, location: place.location })
            }
          >
            <Card data={place} isSmall disableArrow />
          </Grid>
        ))}
      </Grid>
      {open && <VideoModal handleClose={() => setOpen(false)} data={data} />}
    </Container>
  );
};
