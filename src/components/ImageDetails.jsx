// src/components/ImageDetails.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams, Link } from "react-router-dom";
import imageGroups from "../utils/imagePaths";
import useMemberStatus from "../hooks/useMemberStatus";
import "../css/ImageDetails.css";

const ImageDetails = () => {
  const { id } = useParams();
  const group = imageGroups[id];
  const { isMember, handleMemberClick } = useMemberStatus();

  return (
    <div className="image-details-container">
      <div className="image-group-container">
        {/* Imagen principal en la columna izquierda */}
        <div className="column-main">
          <img src={group.principal} alt={`Imagen Principal ${id}`} className="main-image" />
        </div>
        {/* Imágenes del grupo en la columna derecha */}
        <div className="column-sub">
          <div className="sub-column">
            {group.images.slice(0, 2).map((path, index) => (
              <img key={index} src={path} alt={`Imagen ${index}`} className="group-image" />
            ))}
          </div>
          <div className="sub-column">
            {group.images.slice(2, 4).map((path, index) => (
              <img key={index} src={path} alt={`Imagen ${index}`} className="group-image" />
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        {/* Segunda fila: dos columnas */}
        <div className="column-left">
          {/* Columna izquierda: relacionado con socio / no socios */}
          <button onClick={() => handleMemberClick(true)}>SOCIO</button>
          <button onClick={() => handleMemberClick(false)}>NO SOCIO</button>
          {isMember !== null && (
            <div>
              {isMember ? (
                <p>Disfruta de beneficios adicionales.</p>
              ) : (
                <p>No eres un socio, considera unirte para más beneficios.</p>
              )}
            </div>
          )}
        </div>

        <div className="column-right">
          {/* Columna derecha: botón */}
          {isMember !== null && (
            <div className="button-container">
              <Link to={{ pathname: "/appointment", state: { isMember } }}>
                <button>Agendar Cita</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
