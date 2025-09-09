import React, { useEffect, useState } from "react";
import { api } from "./api";

interface ImcHistorialItem {
  id: number;
  peso: number;
  altura: number;
  imc: number;
  categoria: string;
  fecha: string;
}

interface ImcHistorialProps {
  actualizar: boolean; // prop que indica que hay un nuevo cálculo
}

const ImcHistorial: React.FC<ImcHistorialProps> = ({ actualizar }) => {
  const [historial, setHistorial] = useState<ImcHistorialItem[]>([]);

  const fetchHistorial = async () => {
    try {
      const response = await api.get<ImcHistorialItem[]>("/imc/historial");
      setHistorial(response.data);
    } catch (err) {
      console.error("Error al obtener historial:", err);
    }
  };

  useEffect(() => {
    fetchHistorial();
  }, [actualizar]); // se vuelve a llamar cuando 'actualizar' cambia

  return (
    <div className="card historial-card">
      <h2>Historial de cálculos</h2>
      {historial.length === 0 ? (
        <p>No hay cálculos aún.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Peso (kg)</th>
              <th>Altura (m)</th>
              <th>IMC</th>
              <th>Categoría</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {historial.map((item) => (
              <tr key={item.id}>
                <td>{item.peso}</td>
                <td>{item.altura}</td>
                <td>{item.imc.toFixed(2)}</td>
                <td>{item.categoria}</td>
                <td>{new Date(item.fecha).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ImcHistorial;
