import React from 'react';
import TextField from '@mui/material/TextField'
import { useField } from 'formik';

const TextfieldWrapper = ({
  name,
  ...otherProps
}) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    margin: "normal",
    size: 'small'
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }
  //   inputProps={{
  //     style: {
  //       height: '40px',
  //       padding: '5px 14px',
  //     },
  // }}

  return (
    <TextField sx={{
      "& .MuiInputBase-root": {
        height: 45

      }
    }}
      {...configTextfield} />

  );
};

export default TextfieldWrapper;