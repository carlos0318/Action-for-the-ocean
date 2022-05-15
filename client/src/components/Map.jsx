import { useEffect, useState } from "react";
import "../styles/Map.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Rectangle,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const greenOptions = { color: "green" };
const yellowOptions = { color: "yellow" };
const redOptions = { color: "red" };

const Map = ({ coordenadas }) => {
  const [position, setPosition] = useState([]);

  useEffect(() => {
    const getCoordenadas = async () => {
      const res = await axios.get("http://localhost:4000/api/v1/usersBeach/");
      setPosition(res.data.message);
    };
    getCoordenadas();
  }, []);

  console.log(position);

  return (
    <div className="leaflet-container">
      <MapContainer center={coordenadas} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coordenadas}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        {position.map((pos, index) => (
          <Circle
            center={[pos.latitude, pos.longitude]}
            pathOptions={pos.rating < 3 ? redOptions : pos.rating < 6 ? yellowOptions : greenOptions}
            radius={200}
            key={index}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
