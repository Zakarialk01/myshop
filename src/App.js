import React, { useState } from "react";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import { commerce } from "./lib/commerce";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./assets/commerce.png";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});

  const [loading, setLoading] = useState(true);

  const [errorMessage, seterrorMessage] = useState("");

  const getProduct = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    setLoading(false);
    console.log(data);
  };
  //retrieve the cart at the start its empty in the second function we will add items to cart
  const retrieveCart = async () => {
    const retrieve = await commerce.cart.retrieve();
    setCart(retrieve);
    setLoading(false);
    console.log(retrieve);
  };
  //to add items to the cart 7
  const handleAddtoCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
    setLoading(false);
    //to have items in the console
    console.log(response.cart);
  };
  const updateCart = async (productId, quantity) => {
    const update = await commerce.cart.update(productId, { quantity });
    setCart(update.cart);
    setLoading(false);
  };
  const removeFromCart = async (productId) => {
    const remove = await commerce.cart.remove(productId);
    setCart(remove.cart);
    setLoading(false);
  };
  const emptyCart = async (productId) => {
    const empty = await commerce.cart.empty(productId);
    setCart(empty.cart);
  };
  React.useEffect(() => {
    getProduct();
    retrieveCart();

    //console.log(products)
    console.log(cart);
  }, []);

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
    console.log(newCart);
  };

  const handleCapturedCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      seterrorMessage(error.data.error.message);
    }
    //we will passing order and handlecapturedcheckout and errormessage as a props in checkout
  };
  if (loading)
    return (
      <div
        style={{
          position: " absolute",
          maxWidth: "45%",
          maxHeight: "45%",
          top: "50%",
          left: "50%",
          overflow: "visible",
        }}
      >
        <img
          style={{
            position: "relative",
            maxWidth: "100%",
            maxHeight: "100%",
            marginTop: "-50%",
            marginLeft: "-50%",
          }}
          src={logo}
          alt="'ZakariaLoukili"
        />
      </div>
    );

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {" "}
            <Home />
          </Route>
          <Route exact path="/Products">
            <Navbar totalItems={cart.total_items} />
            <Products
              products={products}
              loading={loading}
              onAddtoCart={handleAddtoCart}
            />
          </Route>

          <Route exact path="/Cart">
            <Navbar totalItems={cart.total_items} />
            <Cart
              cart={cart}
              onUpdateCart={updateCart}
              onRemoveFromCart={removeFromCart}
              onEmptyCart={emptyCart}
            />
          </Route>
          <Route exact path="/Checkout">
            <Navbar totalItems={cart.total_items} />
            <Checkout
              cart={cart}
              order={order}
              handleCapturedCheckout={handleCapturedCheckout}
              errorMessage={errorMessage}
              refresh={refreshCart}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
