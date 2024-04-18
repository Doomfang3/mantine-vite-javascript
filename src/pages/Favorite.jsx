import React from "react";
import CocktailsList from "./AllCocktails"; 

function FavoriteList({ favorites, removeFromFavorites }) { 

    return (
        <div className="FavoritesList">
            <br></br>
            <h2>Favorites</h2>

            <div className="list">
                {favorites && favorites.map(cocktail => ( 
            
                    <div className="FavoritePlanCard" key={cocktail.id}> 
                        <div className="top-section">
                            <img src={cocktail.image} alt={cocktail.name} /> 
                        </div>
                        <div className="bottom-section">
                            <h2 className="favorites" style={{ display: 'block' }}>
                                <div>
                                    <h3>{cocktail.name}</h3> 
                                    <button onClick={() => removeFromFavorites(cocktail.id)}>
                                        Remove from Favorites
                                    </button>
                                </div>
                            </h2>
                            <p>
                                {/* Adicione qualquer conteúdo adicional aqui */}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FavoriteList;
