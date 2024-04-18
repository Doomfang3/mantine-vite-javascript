import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const API_URL = 'http://localhost:4000'

const IngredientsPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${API_URL}/recipes/${id}`);
        if (response.ok) {
          const recipeData = await response.json();
          setRecipe(recipeData);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientsPage;
