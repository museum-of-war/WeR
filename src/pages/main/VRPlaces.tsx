import React, { useCallback, useRef } from 'react';
import {
  Container,
  Dialog,
  DialogContent,
  Grid,
  Typography,
} from '@mui/material';
// @ts-ignore
import create360Viewer from '360-image-viewer';
// @ts-ignore
import canvasFit from 'canvas-fit';
import { Card } from '../../components/card/Card';
import { TOURS } from '../../constants/contants';
import { Message } from '../../components/message/Message';

type VRPlacesProps = {
  className?: string;
};
export const VRPlaces: React.FC<VRPlacesProps> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const contentRef = useRef(null);
  const viewerRef = useRef(null);
  const fitRef = useRef(null);

  const handleClose = () => {
    setOpen(false);

    if (viewerRef.current && fitRef.current) {
      // @ts-ignore
      viewerRef.current.destroy();
      window.removeEventListener('resize', fitRef.current);
    }
  };

  const handleOpen = useCallback(() => {
    setOpen(true);

    setTimeout(() => {
      const image = new Image();
      image.src = '/p360/an225.jpg';

      image.onload = () => {
        if (!contentRef.current) return;
        const viewer = create360Viewer({
          image,
        });

        // @ts-ignore
        contentRef.current.appendChild(viewer.canvas);

        const fit = canvasFit(viewer.canvas, window, window.devicePixelRatio);
        window.addEventListener('resize', fit, false);
        fit();
        viewer.start();
        fitRef.current = fit;
        viewerRef.current = viewer;
      };
    }, 200);
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
        {Object.values(TOURS).map((tour) => (
          <Grid
            item
            key={tour.location}
            xs={12}
            sm={6}
            className="card"
            onClick={() => handleOpen()}
          >
            <Card data={tour} />
          </Grid>
        ))}
      </Grid>
      <Dialog
        className="hide-scroll"
        onClose={handleClose}
        open={open}
        fullWidth
        maxWidth="xl"
        PaperProps={{ sx: { height: '100%' } }}
      >
        <DialogContent ref={contentRef} />
      </Dialog>
    </Container>
  );
};
