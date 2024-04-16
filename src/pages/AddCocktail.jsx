import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://iba-world.com"; // Corrected API URL

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

    // Call API to add cocktail
    // fetch(API_URL + "/addCocktail", {
    //   method: "POST",
    //   body: JSON.stringify(newCocktail),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle response from server
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  }

  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Cocktail Name"
            value={name}
            onChange={handleName}
          />
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
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setGlass('') /* Reset glass */}
            >
              Clear
            </button>
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
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setCategory('') /* Reset category */}
            >
              Clear
            </button>
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
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIngredients('') }
            >
              Clear
            </button>
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
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setIngredient('') }
            >
              Clear
            </button>
          </div>

          <button className="btn btn-primary btn-round">Add Cocktail</button>
        </form>
      </div>
    </>
  );
}

export default AddCocktail;
