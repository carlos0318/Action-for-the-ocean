import { useState, useEffect, useContext } from "react";
import Map from "../components/Map";
import "../styles/UserPoint.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/user/UserContext";

const UserPoint = () => {
  const { user } = useContext(UserContext);
  const [rating, setRating] = useState(0);
  const coordenadas = [21.146743185077675, -86.78885941594436];
  const [coordinates, setCoordinates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  const handleCreateNewPoint = (e) => {
    e.preventDefault();
    console.log(rating);
  };

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
        <input
          type="number"
          id="rating"
          name="rating"
          min="0"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button className="userpoint-button"  onClick={handleCreateNewPoint}>Crear una nueva alerta</button>

      <Map coordenadas={coordenadas} />
    </div>
  );
};

export default UserPoint;
