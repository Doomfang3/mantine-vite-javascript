import React, { useState, useEffect } from 'react';
import Search from "../components/Search";
import { Link } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import newCocktail from '../Imagens/newCoktailLogo.jpg'


const API_URL = "http://localhost:4000"

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        const response = await fetch(`${API_URL}/recipes`);
        if (response.ok) {
          const recipesData = await response.json();
          setRecipes(recipesData);
          console.log (recipesData)
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchAllRecipes();
  }, []);



  const handleCancel = async (recipeId,event) => {
    event.preventDefault()
    try {
      const response = await fetch(`${API_URL}/recipes/${recipeId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        

       
        const updatedRecipes = recipes.filter(recipe => recipe.id !== recipeId);
        setRecipes(updatedRecipes);
        console.log("Recipe deleted successfully!");
      } else {
        console.log("Erro ");
      }
    } catch (error) {
      console.log( error);
    }
  };



  const handleFavorite = (recipeId) => {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === recipeId) {
        return { ...recipe, isFavorite: !recipe.isFavorite }; 
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

  const searchHandler = (string) => {
    setQuery(string);
  };

  useEffect(() => {
    const filteredFavorites = recipes.filter(recipe => recipe.isFavorite); 
    setFavorites(filteredFavorites); 
  }, [recipes]);

  const filteredRecipes = query ? favorites.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase())) : recipes;

  return (
  
      <>
      <div>
      <img className='logoNewCocktail' src={newCocktail} alt="NewCocktail" />
      </div>
      <Search searchHandler={searchHandler} />
      <h1>All the Cocktails and recipes</h1> 
      <div className="cards-container">
        {filteredRecipes.map(recipe => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
            <div className="card">
              <div>
                <img className="card-image" src={recipe.image_url} alt={recipe.name} />
              </div>
              <div className="card-header">
                <h2 className="card-title">{recipe.name}</h2>
              </div>
              <div className="card-content">
                <ul>
                  <li>Glass: {recipe.glass}</li> 
                  <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
                  <li>Category: {recipe.category}</li> 
                  <li>Ingredients: {recipe.ingredients.map(ingredient => ingredient.ingredient)}</li>
                  </Link> 
                </ul>
              </div>
              <div className="card-actions">
              <Button className="favorite-btn" onClick={() => handleFavorite(recipe.id)} fullWidth mt="md" radius="md">
                  {recipe.isFavorite ? 'Unfavorite' : 'Favorite'}
                </Button>
                <Button className="delete-btn" type='button' onClick={(event) => handleCancel(recipe.id,event)} 
                fullWidth mt="md" radius="md" title="Delete Item">Delete</Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};


export default RecipesList;

