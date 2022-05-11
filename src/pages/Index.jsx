import { useDarkMode } from 'context/darkMode';
import React from 'react';

const Index = () => {
  const {darkMode}=useDarkMode();
  return (
    <div className={`flex h-full ${darkMode ? "bg-gray-900":"bg-gray-50"}`}>
      Contenido Landing Concesionario
    </div>
  )
}

export default Index;