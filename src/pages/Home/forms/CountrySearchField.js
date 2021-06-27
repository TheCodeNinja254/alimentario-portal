import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const CountrySearchField = ({ handleChange }) => {
  console.log("field");
  return (
    <TextField
      fullWidth
      label="Component"
      margin="normal"
      name="component"
      onChange={handleChange}
      variant="outlined"
    />
  );
};

CountrySearchField.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(CountrySearchField);
