import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useTheme } from "@material-ui/styles";
import { Tooltip } from "@material-ui/core";
import useIsMobile from "../hooks/useIsMobile";

const SearchComponent = ({
  searchPlaceholder,
  SearchPreceedingIcon,
  handleSearch,
}) => {
  const theme = useTheme();
  const isMobile = useIsMobile();

  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: isMobile ? 300 : 400,
        marginBottom: theme.spacing(3),
        backgroundColor: theme.palette.background.paper,
        borderRadius: 3,
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        {SearchPreceedingIcon}
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={searchPlaceholder}
        value={searchTerm}
        inputProps={{ "aria-label": "search orders" }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Tooltip title="Click to search">
        <IconButton
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={() => handleSearch(searchTerm)}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

export default SearchComponent;
