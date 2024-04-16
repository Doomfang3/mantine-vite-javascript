import React, { useState, useEffect } from 'react';
import Search from "../components/Search";

const CocktailsList = () => {
  const [cocktails, setCocktails] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://iba-world.com"); // Corrigido o URL da API
        if (response.ok) {
          const data = await response.json();
          setCocktails(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const searchHandler = (string) => {
    setQuery(string);
  };

  // Filtrar coquetéis favoritos
  useEffect(() => {
    const filteredFavorites = cocktails.filter(cocktail => cocktail.isFavorite); // Supondo que há uma propriedade 'isFavorite' em cada coquetel
    setFavorites(filteredFavorites);
  }, [cocktails]);

  // Filtrar coquetéis com base na consulta de pesquisa
  const filteredCocktails = query ? favorites.filter(cocktail => cocktail.name.toLowerCase().includes(query.toLowerCase())) : favorites;

  return (
    <>
      <Search searchHandler={searchHandler} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {filteredCocktails.map(cocktail => (
          <div key={cocktail.id}>
            <h2>Cocktails</h2>
            <ul>
              <li>
                <div>Cocktail Name: {cocktail.name}</div> {/* Corrigido o acesso às propriedades do coquetel */}
                <div>Cocktail Glass: {cocktail.glass}</div>
                <div>Cocktail Category: {cocktail.category}</div>
                <div>Cocktail Ingredients: {cocktail.ingredients}</div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default CocktailsList;
