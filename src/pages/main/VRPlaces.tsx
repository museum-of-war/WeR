import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Stack
} from '@mui/material';
import { ReactComponent as Arrow } from '../../icons/Arrow.svg';
import { Card } from '../../components/card/Card';
import { VR_PLACES } from '../../constants/contants';
import { Message } from '../../components/message/Message';
import { Modal } from "../common/Modal";

type VRPlacesProps = {
  className?: string;
};
export const VRPlaces: React.FC<VRPlacesProps> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const [p360src, setP360src] = useState('');

  const handleOpen = useCallback((p360src: string) => {
    setP360src(p360src);
    setOpen(true);
  }, []);

  const itemsToRender = VR_PLACES.length > 8 ? VR_PLACES.slice(0, 8) : VR_PLACES;

  return (
    <Container
      sx={{
        mt: {
          xs: 8,
          sm: 12,
          md: 16,
        },
      }}
      className={className}
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
            to={'/vr-places'}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Typography variant="body2" mr={'19px'} color="primary.main">
              <Message id="vrplaces.seeAllPlaces"/>
            </Typography>

            <Arrow/>
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
            onClick={() => handleOpen(place.p360src)}
          >
            <Card data={place} isSmall disableArrow />
          </Grid>
        ))}
      </Grid>
      {open && <Modal handleClose={() => setOpen(false)} p360src={p360src} />}
    </Container>
  );
};
