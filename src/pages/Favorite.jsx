import React from "react";
import recipes from "./AllCocktails"; 

function FavoriteList({ favorites, removeFromFavorites }) { 

    return (
        <div className="FavoritesList">
            <br></br>
            <h2>Favorites</h2>

            <div className="list">
                {favorites && favorites.map(recipes => ( 
            
                    <div className="FavoritePlanCard" key={recipes.id}> 
                        <div className="top-section">
                            <img src={recipes.image} alt={recipes.name} /> 
                        </div>
                        <div className="bottom-section">
                            <h2 className="favorites" style={{ display: 'block' }}>
                                <div>
                                    <h3>{recipes.name}</h3> 
                                    <button onClick={() => removeFromFavorites(recipes.id)}>
                                        Remove from Favorites
                                    </button>
                                </div>
                            </h2>
                            <p>
                                My Favorite List for today
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FavoriteList;
