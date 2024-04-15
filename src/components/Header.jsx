import React from "react";
import { Card, Button, Badge } from '@mantine/core';
import Mojito from '../Imagens/Mojito.png'; 
import Negroni from '../Imagens/Negroni.png';
import Pinacolada from '../Imagens/Pinacolada.png';
import Aperol from '../Imagens/Aperol.png';



function Header({ cocktail, navigate }) {
  return (
    <>
    
    <div class = "cards">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <img src={Mojito} alt="Mojitoß" height={260} />
        </Card.Section>
        <Badge color="pink">Classic</Badge>
        <Button color="green" fullWidth mt="md" radius="md">
          Favourite
        </Button>
      </Card>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <img src={Negroni} alt="Negroni" height={260} />
        </Card.Section>
        <Badge color="pink">Classic</Badge>
        <Button color="green" fullWidth mt="md" radius="md">
          Favourite
        </Button>
      </Card>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <img src={Pinacolada} alt="Pinacolada" height={260} />
        </Card.Section>
        <Badge color="pink">Classic</Badge>
        <Button color="green" fullWidth mt="md" radius="md">
          Favourite
        </Button>
      </Card>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <img src={Aperol} alt="Aperol" height={260} />
        </Card.Section>
        <Badge color="pink">Classic</Badge>
        <Button color="green" fullWidth mt="md" radius="md">
          Favourite
        </Button>
      </Card>
       </div>
    </>
  );
}

export default Header;

