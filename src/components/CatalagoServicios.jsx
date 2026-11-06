import React from 'react';
import { BotonRosa } from './BotonRosa'; // Reutiliza tu componente de botón

export const CatalogoServicios = () => {
  const serviciosDisponibles = [
    { nombre: "Corte de Cabello Dama", precio: "$15.00" },
    { nombre: "Tinte y Mechas", precio: "$45.00" },
    { nombre: "Manicura y Pedicura Spa", precio: "$25.00" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h3>Módulo Secundario: Catálogo de Servicios</h3>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {serviciosDisponibles.map((s, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', minWidth: '200px' }}>
            <h4>{s.nombre}</h4>
            <p style={{ color: '#ff69b4', fontWeight: 'bold' }}>{s.precio}</p>
            <BotonRosa texto="Ver detalles" onClick={() => alert(`Detalles de: ${s.nombre}`)} />
          </div>
        ))}
      </div>
    </div>
  );
};