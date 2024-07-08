import React, { useContext } from "react";
import { weathercontext } from "../context/Context";

function SearchBar() {
  const { search, setsearch } = useContext(weathercontext);

  const handleSearch = (e) => {
    setsearch(e?.target?.value);
  };

  return (
    <div className="flex justify-center w-screen">
      <input
        className="rounded-3xl px-6 py-3 bg-[#ffffff] shadow-xl w-[50%] text-lg mb-20 max-md:w-[75%]"
        type="text"
        placeholder="City"
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
