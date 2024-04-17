import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:4000";

function AddCocktail() {
  const [name, setName] = useState("");
  const [glass, setGlass] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [ingredient, setIngredient] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleGlass = (e) => setGlass(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);
  const handleIngredients = (e) => setIngredients(e.target.value);
  const handleIngredient = (e) => setIngredient(e.target.value);

  function handleFormSubmit(e) {
    e.preventDefault();

    const newCocktail = {
      name: name,
      glass: glass,
      category: category,
      ingredients: ingredients,
      ingredient: ingredient,
    };

    fetch(API_URL + "/addCocktail", {
      method: "POST",
      body: JSON.stringify(newCocktail),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(data => {
       
        navigate('/success'); 
      })
      .catch(error => {
        console.error('Error adding cocktail:', error);
       
      });
  }

  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <br/>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Cocktail Name"
            value={name}
            onChange={handleName}
          />
          <br/>
          <label>Glass</label>
          <div className="d-flex">
            <input
              className="form-control mr-2"
              type="text"
              name="glass"
              placeholder="Cocktail Glass"
              value={glass}
              onChange={handleGlass}
            />
          </div>

          <label>Category</label>
          <div className="d-flex">
            <input
              className="form-control mr-2"
              type="text"
              name="category"
              placeholder="Category"
              value={category}
              onChange={handleCategory}
            />
          </div>

          <label>Ingredients</label>
          <div className="d-flex">
            <input
              className="form-control mr-2"
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              value={ingredients}
              onChange={handleIngredients}
            />
          </div>

          <label>Ingredient</label>
          <div className="d-flex">
            <input
              className="form-control mr-2"
              type="text"
              name="ingredient"
              placeholder="Ingredient"
              value={ingredient}
              onChange={handleIngredient}
            />
          </div>

          <button className="btn btn-primary btn-round">Add Cocktail</button>
        </form>
      </div>
    </>
  );
}

export default AddCocktail;
