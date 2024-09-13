import React from "react";

function Filter({ searchName, handleSearch }) {
  return (
    <>
      <div>
        filter shown with{" "}
        <input
          name="name"
          autoComplete="off"
          value={searchName}
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default Filter;
