//styling
import { ProductsStyle } from "../../styles";

//components
import ClassCard from "./ClassCard";
//
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchBar from "../SearchBar";

const ClassList = () => {
  const classes = useSelector((state) => state.classes.classes);
  const [query, setQuery] = useState("");
  const [_price, setPrice] = useState("100");

  const filteredList = classes
    .filter(
      (_class) =>
        _class.name.toLowerCase().includes(query.toLowerCase()) ||
        _class.type.toLowerCase().includes(query.toLowerCase())
    )
    .filter((_class) => parseInt(_class.price) <= _price)
    .map((_class) => <ClassCard key={_class.id} _class={_class} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} setPrice={setPrice} />
      <ProductsStyle>{filteredList} </ProductsStyle>;
    </div>
  );
};

export default ClassList;
