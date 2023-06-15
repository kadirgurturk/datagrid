import React from 'react'
import search from "../../asset/upcontainer/search.svg"
import filter from "../../asset/upcontainer/filter.svg"

export default function Filter() {
  return (
    <div className='filter'>
        <div className='searchInput'>
            <input/>
            <div className="search">
                <img src={search}/>
            </div>
        </div>
        <div className='filterchoice'>
            
                <img src={filter}/>
            
        </div>
    </div>

  )
}
