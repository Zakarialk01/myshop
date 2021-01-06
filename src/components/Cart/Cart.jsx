import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import useStyles from "./style";
import empty from "../../assets/emptycart.png";

import "./cart.css";
const Cart = ({ cart, onUpdateCart, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();
  const EmptyCart = () => {
    return (
      <div className="emptycart" id="#">
        <div>
          <Button
            className={classes.button}
            component={Link}
            to="/Products"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Fill the basket 🛒
          </Button>
          <img className="img" src={empty} />
        </div>
      </div>
    );
  };
  const RenderCart = () => {
    const emptyCart = () => {
      onEmptyCart(cart.line_items.id);
    };

    return (
      <Grid container justify="center" spacing={8} gutterBottom>
        {cart.line_items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={6} lg={3}>
            <CartItem
              item={item}
              Update={onUpdateCart}
              Remove={onRemoveFromCart}
            />
          </Grid>
        ))}

        <div className={classes.cardDetails}>
          <Typography variant="h5">
            {" "}
            The total price is :
            <span className="h5">
              {" "}
              {cart.subtotal.formatted_with_symbol}
            </span>{" "}
          </Typography>
          <Button
            onClick={emptyCart}
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty cart
          </Button>
          <Button
            component={Link}
            to="/Checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </Grid>
    );
  };
  if (!cart.line_items) return "loading";

  return (
    <Container>
      <div className={classes.toolbar} />
      <h6 className="title" style={{ fontFamily: "system-ui" }}>
        Your Shopping Cart
      </h6>
      <br></br>
      <br></br>
      <hr></hr>
      {!cart.line_items.length ? EmptyCart() : RenderCart()}
    </Container>
  );
};

export default Cart;
