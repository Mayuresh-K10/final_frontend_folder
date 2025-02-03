import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar2(props) {
  const [searchText, setSearchText] = React.useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <React.Fragment>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-search">
            {props.text}
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="search" edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Search"
            sx={{ borderRadius: "15px", border: "1px solid #7B90FF" }} // Set the border to "1px solid #7B90FF"
          />
        </FormControl>
      </React.Fragment>
    </Box>
  );
}
