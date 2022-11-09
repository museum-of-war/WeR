import React from 'react';
import { Dialog, DialogContent } from '@mui/material';

type ModalProps = {
  handleClose: () => void;
  videoSrc: string;
};

export const VideoModal: React.FC<ModalProps> = ({ handleClose, videoSrc }) => {
  return (
    <Dialog
      className="hide-scroll"
      onClose={handleClose}
      open={true}
      fullWidth
      maxWidth="xl"
      sx={{ p: 0 }}
      PaperProps={{ sx: { height: '100%', p: 0 } }}
    >
      <DialogContent sx={{ p: 0, mt: 0 }}>
        <iframe
          width="100%"
          height="100%"
          src={videoSrc}
          // title={intl.formatMessage({ id: location.location })}
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
      </DialogContent>
    </Dialog>
  );
};
