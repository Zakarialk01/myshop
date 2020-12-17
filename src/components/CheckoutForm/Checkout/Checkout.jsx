import React, { useEffect } from "react";
import Stepper from "@material-ui/core/Stepper";
import Paper from "@material-ui/core/Paper";
import Step from "@material-ui/core/Step";
import CssBaseline from "@material-ui/core/CssBaseline";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import PaymentForm from "../PaymentForm";
import AdressForm from "../AdressForm";
import useStyles from "./style";
import { commerce } from "../../../lib/commerce";
import { CircularProgress, Divider, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const Steps = ["shipping adress", "Payement Details"];

const Checkout = ({ cart, errorMessage, handleCapturedCheckout, order }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [checkoutToken, setCheckoutToken] = React.useState(null);
  const [shippingData, setShippingData] = React.useState({});

  //generate token

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart", // to find product (type:"cart")
        });

        setCheckoutToken(token);
        //we should pass the cart as a prop from app.js
        //we see the token in checkout

        console.log(token);
      } catch (error) {
        console.log(error);
      }
    };
    generateToken();
  }, [cart]); //we should recall cart cause we generate token
  //after that we passe checkoutToken to the adressform

  const classes = useStyles();

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // we will passe it as a prop in adresssform

  const Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5"> Thank you for your purchase, </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            {" "}
            Order ref: {order.customer_reference}
          </Typography>
        </div>
        <br></br>
        <Button
          component={Link}
          to="/Products"
          variant="contained"
          color="secondary"
        >
          Back to Products page
        </Button>
      </>
    ) : (
      <>
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      </>
    );
  if (errorMessage) {
    <>
      <div>
        <Typography variant="h5">{errorMessage}</Typography>
      </div>
    </>;
  }
  const Form = () => {
    if (activeStep === 0) {
      return (
        <AdressForm
          checkoutToken={checkoutToken}
          next={next}
          setShippingData={setShippingData}
        />
      );
    } else
      return (
        <PaymentForm
          shippingData={shippingData}
          cart={cart}
          checkoutToken={checkoutToken}
          back={backStep}
          error={errorMessage}
          handleCapturedCheckout={handleCapturedCheckout}
          order={order}
          nextStep={nextStep}
        />
      );
  };

  return (
    <CssBaseline>
      <div className={classes.tootlbar}>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">
              Checkout ☑️
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {Steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === Steps.length ? (
              <Confirmation />
            ) : (
              checkoutToken && <Form />
            )}{" "}
            {/*weget an error of checkoutToken.id (id is undefined to fix the problem we should add a condition in this line if we  have checkoutToken when we have the checkout token we render the  form) */}
          </Paper>
        </main>
      </div>
    </CssBaseline>
  );
};

export default Checkout;
