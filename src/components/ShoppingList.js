import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items}) {

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSelectChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function checkCategory(item){
    if (item.category===selectedCategory||selectedCategory==='All') {
      return true
    } else {
      return false
    }
  }

  const filteredItems = items.filter(checkCategory)



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleSelectChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


