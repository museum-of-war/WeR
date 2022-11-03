import React, { useRef } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

type ModalProps = {
  handleClose: () => void;
  p360src: string;
};

export const Modal360: React.FC<ModalProps> = ({ handleClose, p360src }) => {
  const photoSphereRef = useRef<any>();

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
