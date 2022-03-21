import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Produce"
  });

  function handleChange(event) {
    setNewItem({
      ...newItem,
      [event.target.name]: event.target.value
    })
  }


  function handleSubmit(event) {
    event.preventDefault();

    const newFood = {
      id: uuid(),
      name: newItem.name, 
      category: newItem.category
    }
    props.onItemFormSubmit(newFood);
  }
  
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={newItem.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
