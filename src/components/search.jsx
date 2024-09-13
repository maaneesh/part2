import React from "react";

function Filter({ searchName, handleSearch }) {
  return (
    <>
      <div>
        filter shown with <input value={searchName} onChange={handleSearch} />
      </div>
    </>
  );
}

export default Filter;
