import React, { useState } from "react";
import ImcForm from "./ImcForm";
import ImcHistorial from "./ImcHistorial";

const App: React.FC = () => {
  const [actualizarHistorial, setActualizarHistorial] = useState(false);

  const handleCalculoExitoso = () => {
    setActualizarHistorial(prev => !prev); // alterna para indicar nueva actualización
  };

  return (
    <div className="app-container">
      <ImcForm onCalculoExitoso={handleCalculoExitoso} />
      <ImcHistorial actualizar={actualizarHistorial} />
    </div>
  );
};

export default App;

