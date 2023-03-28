import { ModalProps, Modal, Box, Button } from '@mui/material';
import { JSXElementConstructor, ReactElement } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  py: 4,
  px: 4
};

interface CustomModalProps extends ModalProps {
  open: boolean;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}

export default function CustomModal(props: CustomModalProps) {
  const { title, open, children, ...rest } = props;

  return (
    <Modal open={open} {...rest}>
      <Box sx={{ ...style }}>{children}</Box>
    </Modal>
  );
}
