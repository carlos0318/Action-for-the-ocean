import {useState} from "react";
import Map from "../components/Map";
import "../styles/UserPoint.css";
import Navbar from "../components/Navbar";

const UserPoint = () => {
  const [rating, setRating] = useState(0);
  const coordenadas = [21.146743185077675, -86.78885941594436];

  const handleCreateNewPoint = (e) => {
    e.preventDefault();
    console.log("Creando punto");
  } 

  return (
    <div className="userpoint-container">
      <Navbar />
      <h1>Alertas</h1>
      <p className="userpoint-text">
        Aquí podrás crear una alerta de que en la playa hay mucha basura. Y
        decirnos de la escala del 0 al 10 de que tan sucia esta la playa.
      </p>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" name="rating" min="0" max="10" value={rating} onChange={e => setRating(e.target.value)} />
      </div>
      <button className="userpoint-button">Crear una nueva alerta</button>

      <Map coordenadas={coordenadas} />
    </div>
  );
};

export default UserPoint;
