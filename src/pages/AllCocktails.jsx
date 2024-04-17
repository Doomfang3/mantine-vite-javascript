import React, { useState, useEffect } from 'react';
import Search from "../components/Search";
import { Link } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

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



  const searchHandler = (string) => {
    setQuery(string);
  };

  useEffect(() => {
    const filteredFavorites = recipes.filter(recipe => recipe.isFavorite); 
    setFavorites(filteredFavorites); // 
  }, [recipes]);

  const filteredRecipes = query ? favorites.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase())) : recipes;

  return (
    <>
      <Search searchHandler={searchHandler} />
      <h1>All the Cocktails and recipes</h1> 
      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {filteredRecipes.map(recipe => (
          <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
            <div>
              <h2>Cocktails</h2>
              <Card className="cards" shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <ul style={{ listStyleType: 'none' }}>
                    <li>Cocktail Name: {recipe.name}</li> 
                    <li>Type of Glass: {recipe.glass}</li> 
                    <li>Category: {recipe.category}</li> 
                    <li>Ingredients: {recipe.ingredients.map(ingredient => ingredient.ingredient)}</li> 
                  </ul>
                </Card.Section>
                <Card.Section>
                  <Badge color="pink">Classic</Badge>
                  <Button color="green" fullWidth mt="md" radius="md">Favorite</Button>
                </Card.Section>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
  
  
};

export default RecipesList;

