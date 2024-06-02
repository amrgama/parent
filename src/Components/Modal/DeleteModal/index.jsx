import React from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import strings from "Assets/Local/Local";
import rejectImage from 'Assets/Images/reject.png'
import style from "./styles";

const useStyles = makeStyles(style);

const DeleteModal = ({
  openDeleteModal,
  handleClose,
  deleteTitle,
  handleDelete,
  loading,
}) => {
  const classes = useStyles();
  return (
    <Modal
      open={openDeleteModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-delete"
    >
      <Box className={classes.modalContainer}>
        <IconButton
          className={classes.closeButton}
          color="error"
          size="large"
          onClick={handleClose}
        >
          <HighlightOffIcon />
        </IconButton>
        <img src={rejectImage} alt="DeleteForeverIcon"/>
        <Typography id="modal-modal-delete" variant="h6" component="h2">
          {deleteTitle}
        </Typography>
        <Button
          onClick={handleDelete}
          disabled={loading}
          // color="error"
          variant={loading ? "outlined" : "contained"}
          className={classes.deleteButton}
        >
          {loading ? strings.loading : strings.delete}
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
