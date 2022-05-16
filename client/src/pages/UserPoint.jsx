import { useState, useEffect, useContext } from "react";
import Map from "../components/Map";
import Star from "../components/Star";
import "../styles/UserPoint.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/user/UserContext";
import axios from "axios";

const UserPoint = () => {
  const { user } = useContext(UserContext);
  const [selectedStars, setSelectedStars] = useState(0);
  const [rating, setRating] = useState(0);
  const coordenadas = [21.146743185077675, -86.78885941594436];
  const [coordinates, setCoordinates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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

  const handleCreateNewPoint = async (e) => {
    e.preventDefault();
    try {
      console.log(selectedStars *2)
      await axios.post("http://localhost:4000/api/v1/usersBeach/", {
        userId: user.id,
        latitude: coordinates.lat,
        longitude: coordinates.lng,
        rating: parseInt(selectedStars)*2,
      });
      console.log("created");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="userpoint-container">
      <Navbar />
      <h1>Alertas</h1>
      <p className="userpoint-text">
        Aquí podrás crear una alerta de que en la playa hay mucha basura. Y
        decirnos de la escala del 0 al 10 de que tan sucia esta la playa.
      </p>
      <div className="stars-container">
        <label htmlFor="rating">Rating:</label>
        {/* <input
          type="number"
          id="rating"
          name="rating"
          min="0"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        /> */}
        <div className="stars2">
          {[...Array(5)].map((n, i) => (
            <Star
              key={i}
              selected={selectedStars > i}
              onSelect={() => setSelectedStars(i + 1)}
            />
          ))}
        </div>
      </div>
      <button className="userpoint-button" onClick={handleCreateNewPoint}>
        Crear una nueva alerta
      </button>

      <Map coordenadas={coordenadas} />
    </div>
  );
};

export default UserPoint;
