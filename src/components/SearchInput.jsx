import React from "react";
import { searchIcon } from "../helper/icons";
import { useProductsContext } from "../contexts/ProductProvider";

const SearchInput = () => {
  const { setSearch, search } = useProductsContext();
  return (
    <div className="">
      <div className="relative w-7/12 mx-auto">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center  pointer-events-none ">
          {searchIcon}
        </div>
        <input
          type="search"
          onChange={(e)=>setSearch(e.target.value)}
          value={search}
          id="default-search"
          className="block w-full p-3 mx-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-gray-900  focus:text-black"
          placeholder="Search products..."
      
        />
      </div>
    </div>
  );
};

export default SearchInput;

