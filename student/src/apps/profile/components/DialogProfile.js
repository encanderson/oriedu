import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";

// ===============================|| UI DIALOG - SIZE VARIANTS ||=============================== //

export default function ProfileDialog({ open, setOpen, handleClose }) {
  return (
    <Dialog
      maxWidth={"sm"}
      open={open}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle id="max-width-dialog-title">Preencha os Dados</DialogTitle>
      <DialogContent>
        <Typography variant="body2">
          Para usar todas as funcinalidades dos nossos serviços, é importante
          preencher todos os dados da sua escola.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ pr: 2.5 }}>
        <Button onClick={handleClose} color="error">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
