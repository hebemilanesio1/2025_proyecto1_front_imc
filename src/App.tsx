import React, { useState } from "react";
import ImcForm from "./ImcForm";
import ImcHistorial from "./ImcHistorial";

const App: React.FC = () => {
  const [actualizarHistorial, setActualizarHistorial] = useState(false);

  return (
    <div className="app-container">
      <ImcForm onCalculoExitoso={() => setActualizarHistorial(prev => !prev)} />
      <ImcHistorial key={actualizarHistorial ? 1 : 0} />
    </div>
  );
};

export default App;
