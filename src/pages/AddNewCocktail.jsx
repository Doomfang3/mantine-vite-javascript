import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MakingCocktail from '../Imagens/MakingCocktail.jpg'


const API_URL = 'http://localhost:4000'

const AddCocktail = () => {
  const [name, setName] = useState("");
  const [glass, setGlass] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleGlass = (e) => setGlass(e.target.value);
  const handleIngredients = (e) => setIngredients(e.target.value.split(','));
  const handleIngredient = (e) => setIngredient(e.target.value);

  async function handleFormSubmit(e) {
    e.preventDefault();
  
    const newCocktail = {
      name: name,
      glass: glass,
      ingredients: ingredients,
      ingredient:ingredient, 
    };
 
    try {
      const response = await fetch(`${API_URL}/recipes`, {
        method: "POST",
        body: JSON.stringify(newCocktail),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTimeout(() => {
        navigate('/cocktails')
      }, 250)
      event.preventDefault();
      }
    } catch (error) {
      console.log('Error adding cocktail:', error);
    }
  }

  return (
    <>
      <br></br>
      <br></br>
      <div className='bartender'>
        <img src={MakingCocktail} alt="Making" />
        <br></br>
         <div className="text">
         <h2> Be one :</h2>
         <ul style={{ listStyleType: 'none'}}>
         <li>A maestro of spirits,</li>
         <li> Mixing elixirs with flair,</li>
         <li> Creating new flavors,</li>
         <li>That soothe the soul and warm the heart,</li>
         <li>A true artist of the bar.</li>
         </ul>
        </div>
      </div>
      <div className="add-cocktail">
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <br/>
          <input
            className="form-control mb-4"
            name="name"
            placeholder="Cocktail Name"
            value={name}
            onChange={handleName}
          />
          <br/>
          <label>Glass</label>
          <div className="d-flex">
            <input
              className="add-cocktail"
              name="glass"
              placeholder="Cocktail Glass"
              value={glass}
              onChange={handleGlass}
            />
          </div>
          <label>Ingredients</label>
          <div className="d-flex">
            <input
              className="add-cocktail"
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              value={ingredients.join('') }
              onChange={handleIngredients}
            />
          </div>

          <button type='submit' className="btn btn-primary btn-round">Add Cocktail</button>
        
        </form>
  
      </div>
      
      
    </> 
  );
}

export default AddCocktail;
