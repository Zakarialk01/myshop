import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import { AddShoppingCart } from "@material-ui/icons";
import Details from "./Details";

import useStyles from "./styles";

const Product = ({ product, onAddtoCart }) => {
  const classes = useStyles();

  const handleAddtoCart = () => {
    onAddtoCart(product.id, 1);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h6" glutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6">
            Price : {product.price.formatted_with_symbol}
          </Typography>
          <Typography variant="h6">{product.sku}</Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick={handleAddtoCart}>
          {" "}
          <AddShoppingCart />{" "}
        </IconButton>
        <Details product={product} />
      </CardActions>
    </Card>
  );
};

export default Product;
