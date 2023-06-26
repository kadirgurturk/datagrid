import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'; 
import {TextChange} from "../../reducers/TextReducer"
import search from "../../asset/upcontainer/search.svg"
import filter from "../../asset/upcontainer/filter.svg"



export default function Filter() {



  let dispatch = useDispatch();



  return (
    <div className='filter'>
      <div className='searchInput'>
        <input
          
          onChange={(e) => {
            dispatch(TextChange(e.target.value));
          }} 
        />
        <div className="search" >
          <img src={search} alt="Search" />
        </div>
      </div>
      <div className='filterchoice' >
        <img src={filter} alt="Filter"  />
      </div>
    </div>
  );
}
