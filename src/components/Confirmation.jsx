// src/components/Confirmation.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';


const Confirmation = () => (
  <div>
    <h1>Gracias por su tiempo</h1>
    <p>recibira cualquier actualización del proceso al correo proporcionado</p>
    <Link to="/">
      <button>Inicio</button>
    </Link>
  </div>
);

export default Confirmation;
