import { useState } from "react";

function SearchBar(props) {
  function handleSearch(e) {
    props.onSearch(e.target.value);
  }

  return (
    <div>
      <label htmlFor="" class="relative block"></label>
      <input
        type="text"
        placeholder="Search keyword..."
        value={props.searchWord}
        onChange={handleSearch}
        class="my-4 rounded-sm border-2 border-blue-900 px-2 py-1 w-1/2"
      />
    </div>
  );
}

export default SearchBar;
