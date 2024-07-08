// src/components/ImageGrid.jsx
import { Link } from "react-router-dom";
import imageGroups from "../utils/imagePaths";
import "../css/ImageGrid.css";

const ImageGrid = () => (
  <>
    <div className="image-grid">
    {imageGroups.map((group, index) => (
        <Link to={`/details/${index}`} key={index} className="card">
          <img src={group.principal} alt={`Imagen Principal ${index}`} className="image" />
          <div className="overlay">
            <div className="text">Referencia del grupo {index}</div>
          </div>
        </Link>
      ))}
    </div>
  </>
);

export default ImageGrid;
