import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/commerce.png";
import useStyles from "./style";
import { Link, useLocation } from "react-router-dom";
const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        {/*<Link to="/">*/}
        <Typography
          component={Link}
          to="/Products"
          variant="h6"
          className={classes.title}
          color="inherit"
        >
          <img
            src={logo}
            alt="'ZakariaLoukili"
            height="25px"
            className={classes.image}
          />{" "}
          Zakaria's Shop
        </Typography>
        {/*} </Link>*/}
        <div className={classes.grow} />
        <div className={classes.button} />
        {/*} <Link to="/Cart">*/}
        {location.pathname === "/Products" && ( // normally we use ? : but when we do && its appear only if the condition is true in the first place
          <div>
            <IconButton
              component={Link}
              to="/Cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
