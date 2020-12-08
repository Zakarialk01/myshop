import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  CardMedia,
} from "@material-ui/core";

const Review = ({ cart }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Order summary
      </Typography>
      {cart.line_items.map((item) => (
        <List disablePadding>
          <ListItem style={{ padding: "10px 0" }} key={item.id}>
            <ListItemText primary secondary={`Quantity: ${item.quantity}`} />

            <Typography variant="body1">{item.name}</Typography>
          </ListItem>
          <Typography variant="body1">
            Price :{item.line_total.formatted_with_symbol}
          </Typography>
        </List>
      ))}
      <br></br>
      <Typography variant="subtitle1">
        Total Items : {cart.total_items}
      </Typography>
      <ListItem style={{ padding: "10px 0" }}>
        <ListItemText primary="Total Price : " />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {cart.subtotal.formatted_with_symbol}
        </Typography>
      </ListItem>
    </div>
  );
};

export default Review;
