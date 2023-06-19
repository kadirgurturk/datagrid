import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'; 
import {TextChange} from "../../reducers/TextReducer"
import search from "../../asset/upcontainer/search.svg"
import filter from "../../asset/upcontainer/filter.svg"
import FilterChoice from './FilterChoice';
import { useAsyncDebounce } from 'react-table'


export default function Filter() {

  const globalFilter = useSelector(state => state.TextFilter.text)

  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [filterOption, setFilterOption] = useState("none");
  const [searchInput, setSearchInput] = useState("");

  let dispatch = useDispatch();

  console.log(searchInput);

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
          
          onChange={(e) => {
            setSearchInput(e.target.value)
            dispatch(TextChange(e.target.value));
          }}
          //disabled={filterOption === "none"}
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
