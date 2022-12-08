import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedSearch, handleSearch } from "../feature/Search/searchSlice";
import { MdOutlineSearch } from "react-icons/md";
import { addEntry } from "../feature/employee/employeeSlice";
import Spinner from "./Spinner";
const SearchComponent = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { searchResult, isLoading } = useSelector((state) => state.search);
  function handleChange(e) {
    const term = e.target.value;
    setSearchTerm(term);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchTerm) return;
    dispatch(handleSearch(searchTerm));
  }
  function handleOpen(employee) {
    dispatch(addSelectedSearch(employee));
    dispatch(addEntry(employee));
  }
  return (
    <div className=" grid place-content-center   ">
      <form className="m-4 flex gap-2 h-fit ">
        {/* <label htmlFor="searchInput">{title}</label> */}
        <input
          name="searchInput"
          id="searchInput"
          type={"search"}
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search"
          className="outline-none border-2 rounded-md p-1"
        />
        <button
          type="submit"
          className="rounded-md text-white bg-mainBlue text-xl border-2 px-4 "
          onClick={handleSubmit}
        >
          <MdOutlineSearch />
        </button>
      </form>
      {/* Loading */}
      {isLoading && <Spinner />}
      {/* Result Container */}
      {searchResult && (
        <div className="grid ">
          {searchResult.map((employee, i) => {
            return (
              <button key={employee.id} onClick={() => handleOpen(employee)}>
                {" "}
                {employee.name}{" "}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
