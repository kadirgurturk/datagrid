import React,{useState} from 'react'
import search from "../../asset/upcontainer/search.svg"
import filter from "../../asset/upcontainer/filter.svg"
import FilterChoice from './FilterChoice';

export default function Filter() {
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [filterOption, setFilterOption] = useState("none");
  const [searchInput, setSearchInput] = useState("");

  console.log(isOpenFilter);

  const handleSearchClick = () => {
    console.log(searchInput);
  };

  const filterClick = () =>{
    setIsOpenFilter(true)

  }

  return (
    <div className='filter'>
      <div className='searchInput'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          disabled={filterOption === "none"}
        />
        <div className="search" onClick={handleSearchClick}>
          <img src={search} alt="Search" />
        </div>
      </div>
      <div className='filterchoice' onClick={filterClick}>
        <img src={filter} alt="Filter"  />
        {isOpenFilter && <FilterChoice filterOption={filterOption} setFilterOption={setFilterOption} setIsOpenFilter={setIsOpenFilter}/>}
      </div>
    </div>
  );
}
