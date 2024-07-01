// src/components/ImageDetails.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import imagePaths from '../utils/imagePaths';
import useMemberStatus from '../hooks/useMemberStatus';

const ImageDetails = () => {
  const { id } = useParams();
  const imagePath = imagePaths[id];
  const { isMember, handleMemberClick } = useMemberStatus();

  return (
    <div>
      <img src={imagePath} alt={`Imagen ${id}`} />
      <div>
        <button onClick={() => handleMemberClick(true)}>SOCIO</button>
        <button onClick={() => handleMemberClick(false)}>NO SOCIO</button>
      </div>
      {isMember !== null && (
        <div>
          <p>Más información sobre la imagen {id} aquí.</p>
          {isMember ? (
            <p>Disfruta de beneficios adicionales.</p>
          ) : (
            <p>No eres un socio, Considera unirte para más beneficios.</p>
          )}
          <Link to="/appointment">
            <button>Agendar Cita</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ImageDetails;

