import React, { useState, useEffect } from 'react';

const CocktailsList = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("recepies.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCocktails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Cocktails</h2>
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.id}>
            <div>{cocktail.name}</div> - {cocktail.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailsList;
