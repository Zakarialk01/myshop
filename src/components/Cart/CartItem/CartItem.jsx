import React from "react";
import {
  Typography,
  Button,
  CardMedia,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import useStyles from "./style";
const CartItem = ({ item, Remove, Update }) => {
  const classes = useStyles();
  const RemoveItem = () => {
    Remove(item.id);
  };
  const UpdateMinceQuantity = () => {
    Update(item.id, item.quantity - 1);
  };
  const UpdatePlusQuantity = () => {
    Update(item.id, item.quantity + 1);
  };
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.media.source}
        title={item.name}
      />

      <CardContent className={classes.CardContent}>
        <Typography variant="h6">{item.name}</Typography>

        <Typography variant="h6">
          {" "}
          Price : {item.line_total.formatted_with_symbol}
        </Typography>
        <Typography variant="h6">Quantity : {item.quantity}</Typography>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button type="button" onClick={UpdateMinceQuantity}>
              -
            </Button>

            <Button type="button" onClick={UpdatePlusQuantity}>
              +
            </Button>
          </div>
          <Button
            onClick={RemoveItem}
            variant="contained"
            type="button"
            color="secondary"
          >
            Remove
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CartItem;
