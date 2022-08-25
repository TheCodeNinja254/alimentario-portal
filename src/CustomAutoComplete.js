import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Autocomplete, TextField } from "@mui/material";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  inputField: {
    ...theme.typography.customInput,
  },
  dialogContent: {
    textAlign: "center",
  },
}));

const CustomAutoComplete = ({
  id,
  setFieldValue,
  value,
  options,
  renderOptionName,
  renderOptionId,
  error,
  label,
  name,
  noOptionsText,
}) => {
  const classes = useStyles();

  return (
    <Autocomplete
      id={id}
      onChange={(event, selectedValue) => {
        setFieldValue(name, selectedValue[renderOptionId]);
      }}
      label={label}
      value={value}
      disableClearable
      options={options}
      openOnFocus
      className={classes.inputField}
      error={!!error}
      getOptionLabel={(option) => option[renderOptionName]}
      noOptionsText={noOptionsText}
      renderInput={(params) => (
        <TextField
          className={classes.inputField}
          {...params}
          label={label}
          error={!!error}
          name={name}
          helperText={error || null}
          variant="outlined"
        />
      )}
    />
  );
};

CustomAutoComplete.defaultProps = {
  renderOptionId: 0,
};

CustomAutoComplete.propTypes = {
  id: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  options: PropTypes.array.isRequired,
  renderOptionName: PropTypes.string.isRequired,
  renderOptionId: PropTypes.any,
  error: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  noOptionsText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CustomAutoComplete;
