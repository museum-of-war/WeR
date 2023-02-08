import React from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { useIntl } from 'react-intl';
import { TranslationKey } from '../../components/message/Message';

type ModalProps = {
  handleClose: () => void;
  data: {
    videoSrc: string;
    location: TranslationKey;
  };
};

export const VideoModal: React.FC<ModalProps> = ({ handleClose, data }) => {
  const intl = useIntl();

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
          src={data.videoSrc}
          title={intl.formatMessage({ id: data.location })}
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
