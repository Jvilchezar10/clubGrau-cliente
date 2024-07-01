// src/components/ImageGrid.jsx
import { Link } from 'react-router-dom';
import imagePaths from '../utils/imagePaths';
import "../css/ImageGrid.css";

const ImageGrid = () => (
  <div className="image-grid">
    {imagePaths.map((path, index) => (
      <Link to={`/details/${index}`} key={index} className="card">
        <img src={path} alt={`Imagen ${index}`} className="image" />
        <div className="overlay">
          <div className="text">Referencia de la imagen</div>
        </div>
      </Link>
    ))}
  </div>
);

export default ImageGrid;


