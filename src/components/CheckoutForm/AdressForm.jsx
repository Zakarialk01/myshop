import React, { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomTextField from "./CustomTextField";
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";

const AdressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
  const [shippingSubDivision, setShippingSubDivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  console.log(shippingOptions);
  const countries =
    /*object . entries will give uskeys and values  as array of array ["ma","maroc"] ... we use it cs countries isnét an array*/
    Object.entries(shippingCountries).map(([code, name]) => ({
      id: code,
      label: name,
    }));
  console.log(countries);

  const subdivisions =
    /*object . entries will give uskeys and values  as array of array ["ma","maroc"] ... we use it cs countries isnét an array*/
    Object.entries(shippingSubDivisions).map(([code, name]) => ({
      id: code,
      label: name,
    }));
  console.log(subdivisions);

  //first we do a call for api to fetch shipping countrie after that in checkout.jsx we will create checkouttoken where we had the activestep
  //after that we render the countries which shipping is available in line 83
  const options = shippingOptions.map((shippingO) => ({
    id: shippingO.id,
    price: shippingO.price,
    country: shippingO.country,
    description: shippingO.description,
  }));

  //fetch countries
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[2]); //[2] to updated to morroco in the input
  };

  //fetch subdivisions in each country
  const fetchSubDivisions = async (checkoutTokenId, countryCode) => {
    const {
      subdivisions,
    } = await commerce.services.localeListShippingSubdivisions(
      checkoutTokenId,
      countryCode
    );
    setShippingSubDivisions(subdivisions);
    setShippingSubDivision(Object.keys(subdivisions)[0]);
  };

  //fetchshippingoption with getshippigoptions documentation in commerce.js
  const fetchShippingOptions = async (checkoutTokenId, country, region) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);

    {
      /* (solution in checkout.jsx)we get an error of checkoutToken.id (id is undefined to fix the problem we should add a condition in this line if we  have checkoutToken when we have the checkout token we render the  form) */
    }
    //fetchSubDivisions(); normally we should call fetchsubdivisions here but we cant call it immediately after fetchcountri dont have countries yet  so we create anathor useeffect
  }, []);
  useEffect(() => {
    if (shippingCountry) fetchSubDivisions(checkoutToken.id, shippingCountry);
  }, [shippingCountry]);
  useEffect(() => {
    if (shippingSubDivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubDivision
      );
  }, [shippingSubDivision]);

  const methods = useForm();
  return (
    <div>
      <Typography variant="h6" glutterBottom>
        Shipping Adress
      </Typography>

      {/*for that payment form know the previous step we should do onsubmit which we add next function in checkout and newtStep backStep */}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingSubDivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <CustomTextField required name="First Name" label="First Name" />
            <CustomTextField
              required
              name="Adress Line 1"
              label="Adress line 1"
            />
            <CustomTextField
              required
              name="Adress Line 2"
              label="Adress Line 2"
            />
            <CustomTextField required name="City" label="City" />
            <CustomTextField required name="Zip" label="Zip / Postal code" />
            <CustomTextField required name="Email" label="Email" />
            <Grid item xs={6} xm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                fullWidth
                value={shippingCountry}
                onChange={(e) => {
                  setShippingCountry(e.target.value);
                }}
              >
                {/*object . entries will give uskeys and values  as array of array ["ma","maroc"]we use it cs countries isnét an array*/}

                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {" "}
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} xm={6}>
              <InputLabel>Shipping Subdivisions</InputLabel>
              <Select
                fullWidth
                value={shippingSubDivision}
                onChange={(e) => {
                  setShippingSubDivision(e.target.value);
                }}
              >
                {/*object . entries will give uskeys and values  as array of array ["ma","maroc"]we use it cs countries isnét an array*/}

                {subdivisions.map((region) => (
                  <MenuItem key={region.id} value={region.id}>
                    {" "}
                    {region.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} xm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                fullWidth
                value={shippingOption}
                onChange={(e) => {
                  setShippingOption(e.target.value);
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.description} - {option.price.formatted_with_symbol}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br></br>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              to="/Cart"
              variant="contained"
              color="secondary"
            >
              Back to cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              {" "}
              {/*we add submit in form with reacthookform we do methode.handlesubmit...*/}
              Next step
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AdressForm;
