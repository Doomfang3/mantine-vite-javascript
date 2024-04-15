import {Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mantine/core';

const AboutPage = () => {
  return (
    <div class="aboutPage">
      <h1>About Us</h1>
      <h3>Welcome to cocktail world!</h3>
      <p> Your one-stop shop for crafting amazing cocktails at home!
          At Virtual Bar, you'll find everything you need to whip up delicious drinks from the comfort of your own couch.
      </p>
         <h3>Explore what we offer:</h3>
         <ul>

          <li>Search for recipes by name, ingredient, or by the spirit you have on hand.</li>
          <li>Discover new cocktails based on your tastes and preferences.</li>
          <li>Save your favorite recipes for easy access later.</li>
          <li>Build your own personalized cocktail library.</li>
          <li>Share your creations with friends and family.</li>
          <li>Learn to mix like a pro with step-by-step tutorials.</li>
         </ul> 
      <h3>With Virtual Bar, you'll never be stuck wondering what to do with that half-empty bottle again!</h3>
     
       <br></br>
        <p>The history of cocktails is a fascinating mix of improvisation, experimentation, and evolving tastes.
          Early roots: While mixing drinks dates back to ancient times, the modern cocktail is believed to have emerged in the late 18th century America.
          19th Century: Cocktails were simple, typically featuring spirits, sugar, water, and bitters. Bartenders experimented with new ingredients and techniques, leading to the invention of the shaker and recipe books.
          1920s Prohibition: The difficulty of finding quality alcohol led to creative cocktails using homemade spirits, juices, and syrups.
          Post-Prohibition: Tiki cocktails, inspired by Polynesian culture, emerged with rum, fruit juices, and exotic decorations.
          Modern Era: Fresh ingredients, artisanal spirits, and refined techniques define modern cocktails. Classic recipes are revisited alongside innovative creations.
          It's a rich story of flavor, innovation, and adaptation, reflected in the vast variety of cocktails enjoyed worldwide.</p>
      <Button variant="filled" color="green" radius="lg">
                <Link to="/">Go back to Home</Link>
      </Button>
    </div>
  );
};

export default AboutPage;
