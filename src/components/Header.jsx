import React from "react";
import { Card, Button, Badge } from '@mantine/core';
import Mojito from '../Imagens/Mojito.png'; 
import Negroni from '../Imagens/Negroni.png';
import Pinacolada from '../Imagens/Pinacolada.png';
import Aperol from '../Imagens/Aperol.png';
import { useState } from 'react';



function Header({ cocktail, navigate }) {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}> 
      <div className="cards"> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <img src={Mojito} alt="Mojito" height={260} /> 
          </Card.Section>
          <Badge color="pink">Classic</Badge>
          <h2>Mojito</h2>
          <Button color="green" fullWidth mt="md" radius="md">
          Best Seller
          </Button>
        </Card>
        </div>
        <div className="cards"> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <img src={Negroni} alt="Negroni" height={260} />
          </Card.Section>
          <Badge color="pink">Classic</Badge>
          <h2>Negroni</h2>
          <Button color="green" fullWidth mt="md" radius="md">
          Best Seller
          </Button>
        </Card>
        </div> <div className="cards"> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <img src={Pinacolada} alt="Pinacolada" height={260} />
          </Card.Section>
          <Badge color="pink">Classic</Badge>
          <h2>Pinacolada</h2>
          <Button color="green" fullWidth mt="md" radius="md">
            Best Seller
          </Button>
        </Card>
        </div> <div className="cards"> 
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <img src={Aperol} alt="Aperol" height={260} />
          </Card.Section>
          <Badge color="pink">Classic</Badge>
          <h2>Aperol</h2>
          <Button color="green" fullWidth mt="md" radius="md">
          Best Seller
          </Button>
        </Card>
      </div>
      </div>
    </>
  );
}

export default Header;
