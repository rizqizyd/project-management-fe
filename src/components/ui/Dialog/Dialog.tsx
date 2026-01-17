import {
  Dialog as BaseDialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  actions?: { label: string; onClick: () => void }[];
}

const Dialog = ({ open, onClose, title, message, actions }: DialogProps) => {
  return (
    <BaseDialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      {actions && actions.length > 0 && (
        <DialogActions>
          {actions.map((item, idx) => (
            <Button key={idx} onClick={item.onClick}>
              {item.label}
            </Button>
          ))}
        </DialogActions>
      )}
    </BaseDialog>
  );
};

export default Dialog;
