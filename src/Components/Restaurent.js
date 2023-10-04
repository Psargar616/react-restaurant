import React, { useState } from 'react'
import "./style.css"
import Menu from "./MenuAPI"
import MenuCard from './MenuCard'
import Navbar from './Navbar'

// getting unique categories in an array using set and spread operator
const allCategories = [
    ...new Set(
        Menu.map((item) => {
            return item.category;
        } )
    ), "All",
];

const Restaurent = () => {
    // initially all food items in menuAPI are passed to MenuCard and rendered their
    const [menuData, setMenuData] = useState(Menu);
    const [menuCategory, setMenuCategory] = useState(allCategories);

  
    // console.log(allCategories);

    const filterItem = (category) => {
        // displaying all data 
        if(category === "All"){
            setMenuData(Menu);
            return;
        }
        // filtering cards based on category
        const updatedList = Menu.filter((item) => {
            return item.category === category;
        })
        // updating menudata and rerendering page
        setMenuData(updatedList);

    }
  return (
    <>
       <Navbar filterItem={filterItem} menuCategory={menuCategory} />
       <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurent

