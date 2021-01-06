import React from "react";
import { Grid, Button } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

const Products = ({ products, onAddtoCart }) => {
  const [query, setQuery] = React.useState("");

  const search = (e) => {
    setQuery(e.target.value);
  };
  const input = {
    width: "50%",
    margin: "20px auto",
    padding: "10px",
    border: "none",
    boxShadow: `0px 4px 8px  #3f51b5`,
  };

  const [visible, setVisible] = React.useState(8);

  const classes = useStyles();

  const showMoreItems = () => {
    setVisible(visible + 4); /*prevValue=>prevValue+3*/
    console.log(visible);
  };

  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <form style={{ textAlign: "center" }}>
          <input
            className="search-bar"
            type="text"
            placeholder="search for a shoes"
            style={input}
            onChange={search}
          ></input>
        </form>
        <br></br>

        <Grid container justify="center" spacing={2}>
          {products
            .slice(0, visible)
            .filter((product) => {
              if (query === "") {
                return product;
              } else if (
                product.name.toLowerCase().includes(query.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddtoCart={onAddtoCart} />
              </Grid>
            ))}
        </Grid>

        <br></br>

        {visible < 16 ? (
          <Button onClick={showMoreItems} variant="contained" color="primary">
            Load more
          </Button>
        ) : (
          console.log(null)
        )}
      </main>
    </>
  );
};

export default Products;
