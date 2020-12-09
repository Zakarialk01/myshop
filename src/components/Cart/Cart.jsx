import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import useStyles from "./style";

const Cart = ({
  cart,
  onUpdateCart,
  onRemoveFromCart,
  onEmptyCart,
  refresh,
}) => {
  const classes = useStyles();
  const EmptyCart = () => {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Your Basket is empty ! </h1>
      </>
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
            The total price is : {cart.subtotal.formatted_with_symbol}
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
            onClick={refresh}
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
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? EmptyCart() : RenderCart()}
    </Container>
  );
};

export default Cart;
