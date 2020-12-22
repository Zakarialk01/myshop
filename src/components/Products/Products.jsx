import React from "react";
import { Grid, Button } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

const Products = ({ products, onAddtoCart }) => {
  const [visible, setVisible] = React.useState(8);

  const classes = useStyles();

  const showMoreItems = () => {
    setVisible(visible + 4); /*prevValue=>prevValue+3*/
    console.log(visible);
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={2}>
        {products.slice(0, visible).map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddtoCart={onAddtoCart} />
          </Grid>
        ))}
      </Grid>
      <br></br>

      {visible === 8 ? (
        <Button onClick={showMoreItems} variant="contained" color="primary">
          Load more
        </Button>
      ) : (
        console.log(null)
      )}
    </main>
  );
};

export default Products;
