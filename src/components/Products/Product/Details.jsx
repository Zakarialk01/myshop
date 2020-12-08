import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
const Details = ({ product }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        className={classes.Button}
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {" "}
          {/*productname*/}
          {product.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Card className={classes.root}>
              {product.assets.map((asset) => {
                return (
                  <CardMedia className={classes.mediaModal} image={asset.url} />
                );
              })}

              <CardContent>
                <div className={classes.cardContent}>
                  <Typography variant="h6" glutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="h5">
                    {product.price.formatted_with_symbol}
                  </Typography>
                </div>
                <Typography
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  body="h2"
                  color="textSecondary"
                />
              </CardContent>
              <CardActions
                disableSpacing
                className={classes.cardActions}
              ></CardActions>
            </Card>
            {/*productiamge*/}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Return
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Details;
