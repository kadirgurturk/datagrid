import React from 'react'
import close from "../../asset/login/close.svg"

export default function FilterChoice({filterOption, setFilterOption,setIsOpenFilter }) {

    const handleFilterChange = (option) => {
        setFilterOption(option);
      };

  

  return (
    <div className="filterOptions" >
       <div className="filterPopup">
            <img src={close} alt="close"  onClick={() =>{ setIsOpenFilter(false)}} />
                <div className="choices">
                    <div style={filterOption === "none" ? {color: "#744BFC" } : {color:'black'} } onClick={() => handleFilterChange("none")}>Filter Yok</div>
                    <div style={filterOption === "link" ? {color: "#744BFC" } : {color:'black'} } onClick={() => handleFilterChange("link")}>Sosyal Medya Linki</div>
                    <div style={filterOption === "media" ? {color: "#744BFC" } : {color:'black'} } onClick={() => handleFilterChange("media")}>Sosyal Medya</div>
                    <div style={filterOption === "description" ? {color: "#744BFC" } : {color:'black'} } onClick={() => handleFilterChange("description")}>Açıklama</div>
                </div>
       </div>
  </div>
  )
}
