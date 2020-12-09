import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const CustomTextField=({name,label,required})=> {
    const control = useFormContext();
  return (
    <Grid item xs={6} xm={6}>
      <Controller
        as={TextField}
        contorl={control}
        fullWidth
        name={name}
        label={label}
        required={required}
      ></Controller>
    </Grid>
  );
}

export default CustomTextField;