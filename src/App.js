import React from "react";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState({});

  const getProduct = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    console.log(data);
  };
  //retrieve the cart at the start its empty in the second function we will add items to cart
  const retrieveCart = async () => {
    const retrieve = await commerce.cart.retrieve();
    setCart(retrieve);
    console.log(retrieve);
  };
  //to add items to the cart 7
  const handleAddtoCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
    //to have items in the console
    console.log(response.cart);
  };
  const updateCart = async (productId, quantity) => {
    const update = await commerce.cart.update(productId, {quantity});
    setCart(update.cart);
  };
  const removeFromCart = async (productId) => {
    const remove = await commerce.cart.remove(productId);
    setCart(remove.cart);
  };
  const emptyCart=async(productId)=>{
    const empty= await commerce.cart.empty(productId)
    setCart(empty.cart)
  }
  React.useEffect(() => {
    getProduct();
    retrieveCart();
    //console.log(products)
    console.log(cart);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddtoCart={handleAddtoCart} />
          </Route>

          <Route exact path="/Cart">
            <Cart cart={cart} onUpdateCart={updateCart} onRemoveFromCart={removeFromCart} onEmptyCart={emptyCart} />
          </Route>
          <Route exact path="/Checkout">
            <Checkout cart={cart} /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
