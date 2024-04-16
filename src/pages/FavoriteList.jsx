import React from "react";
import CocktailsList from "./AllCocktails"; // Importe CocktailsList se necessário

function FavoriteList({ favorites, removeFromFavorites }) { // Adicione removeFromFavorites como propriedade

    return (
        <div className="FavoritesList">
            <h2>Favorites</h2>

            <div className="list">
                {favorites && favorites.map(cocktail => ( // Use `cocktail` como o nome do parâmetro da função de mapeamento
                    <div className="FavoritePlanCard" key={cocktail.id}> {/* Use `cocktail.id` em vez de `CocktailsList.id` */}
                        <div className="top-section">
                            <img src={cocktail.image} alt={cocktail.name} /> {/* Use `cocktail.image` e `cocktail.name` */}
                        </div>
                        <div className="bottom-section">
                            <h2 className="favorites" style={{ display: 'block' }}>
                                <div>
                                    <h3>{cocktail.name}</h3> {/* Use `cocktail.name` */}
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
