import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import CountrySearchField from "../forms/CountrySearchField";
import CountriesList from "./CountriesList";

const useStyles = makeStyles(() => ({
  cardHeader: {
    "& span": {
      fontSize: 20,
    },
  },
  countriesWrapper: {
    maxHeight: 300,
    overflow: "scroll",
  },
}));
const Countries = ({ handleChange, searchParam, selectOption }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title="Countries" className={classes.cardHeader} />
      <CardContent>
        <CountrySearchField handleChange={handleChange} />
        <CountriesList
          classes={classes}
          selectOption={selectOption}
          searchParam={searchParam}
        />
      </CardContent>
    </Card>
  );
};

Countries.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchParam: PropTypes.string,
  selectOption: PropTypes.func.isRequired,
};

export default React.memo(Countries);
