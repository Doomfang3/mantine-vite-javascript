import React from 'react';
import Negroni  from '../Imagens/Negroni.png';

function Content() {
  return (
    <div className="content" style={{ color: 'white' }}>
        
        
      {/* Conteúdo do componente Content */}
      <h2>All Cocktails</h2>
      <p>Este é o conteúdo principal da página.</p>
      <>
      <img src={Negroni} alt="Negroni" />
      {/* <h3>{cocktail.nome}</h3>
      <p>{cocktial.tagline}</p>
      <p>Recepi: {cocktail.recepi}</p>
      <p>Glass: {coktail.glass}</p>
      <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button> */}
      </>
      </div>
      
    
  );
}

export default Content;
