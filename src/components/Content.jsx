import React from 'react'
import news3 from '../Imagens/news3.jpg'
import news1 from '../Imagens/news1.jpg'
import news2 from '../Imagens/news2.jpg'


function Content({ cocktail, navigate }) {
  return (
    <div className="content">
      <br></br>
      <br></br>
      <h2>The Cocktail World</h2>
      <div>
        <h3>News from this week</h3>
        <img src={news3} alt="new3" height={260} /> 
        <p>As the world awakens from its winter slumber,
          So too do our taste buds, craving something refreshing and new.
          Spring cocktails burst forth with vibrant flavors,
          A symphony of citrus, herbs, and floral notes.
          Embrace the season with a glass of springtime delight.</p>
        <img src={news1} alt="news1" height={260} /> 
        <img src={news2} alt="news2" height={260} /> 
        <p>Gathered 'round the bar we sit,
          Friendships clinking glass to glass,
          Cocktails in hand, stories shared,
          Laughter echoing through the night,
          In company like this, life's a bliss.
          </p>
          </div>
      <p>Este é o conteúdo principal da página.</p>
      
    </div>
  );
}


export default Content;
