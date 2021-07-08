import React from "react";
// Styling
import { SearchBarStyled, FlexStyle, Sellector } from "../styles";

const SearchBar = (props) => {
  return (
    <FlexStyle style={{ margin: "20px" }}>
      <SearchBarStyled
        placeholder="Search for a class name or type"
        onChange={(event) => props.setQuery(event.target.value)}
      />
      <Sellector>
        <label style={{ padding: "5px" }} for="distance">
          Choose Maximum Price (Jod){" "}
        </label>
        <input
          onChange={(event) => props.setPrice(event.target.value)}
          type="range"
          min="0"
          max="100"
          class="slider"
          id="myRange"
        />
      </Sellector>
    </FlexStyle>
  );
};

export default SearchBar;
