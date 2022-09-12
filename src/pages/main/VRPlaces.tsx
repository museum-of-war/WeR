import React, { useCallback, useRef, useState } from 'react';
import {
  Container,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from '@mui/material';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { Card } from '../../components/card/Card';
import { VR_PLACES } from '../../constants/contants';
import { Message } from '../../components/message/Message';

type ModalProps = {
  handleClose: () => void;
  p360src: string;
};
const Modal: React.FC<ModalProps> = ({ handleClose, p360src }) => {
  const photoSphereRef = useRef<any>();

  return (
    <Dialog
      className="hide-scroll"
      onClose={handleClose}
      open
      fullWidth
      maxWidth="xl"
      sx={{ p: 0 }}
      PaperProps={{ sx: { height: '100%', p: 0 } }}
    >
      <DialogContent sx={{ p: 0, mt: 0 }}>
        <ReactPhotoSphereViewer
          ref={photoSphereRef}
          src={p360src}
          // @ts-ignore
          height="100%"
          // @ts-ignore
          width="100%"
        />
      </DialogContent>
    </Dialog>
  );
};

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
      <Typography variant="h2">
        <Message id="vrplaces.title" />
      </Typography>
      <Grid container spacing={6} sx={{ mt: 0 }} className="cards">
        {VR_PLACES.map((place) => (
          <Grid
            item
            key={place.location}
            xs={12}
            sm={6}
            className="card"
            onClick={() => handleOpen(place.p360src)}
          >
            <Card data={place} disableArrow />
          </Grid>
        ))}
      </Grid>
      {open && <Modal handleClose={() => setOpen(false)} p360src={p360src} />}
    </Container>
  );
};
