import React, { useState } from "react";


function Sidebar() {
  // Usando o useState para controlar o estado da barra lateral
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado da barra lateral
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
    </>
    
  );
}


export default Sidebar;
