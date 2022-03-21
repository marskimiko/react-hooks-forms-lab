import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    //console.log('categoryChange:', event.target.value);
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
    //console.log('text entered:', event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true
    } else {
      return (item.category === selectedCategory)
    }

  });

  const searchItems = itemsToDisplay.filter((item) => {
    if (item.name.toLowerCase().includes(searchText.toLowerCase())) { // case if item name contains search text
      return true;
    } else { // case if item name does NOT contain search text
      return false;
    }
  })
  //console.log('search:',searchItems)
 
  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} search={searchText} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {searchItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
