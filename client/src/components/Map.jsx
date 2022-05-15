import React from "react";
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

const position = [21.146743185077675, -86.78885941594436]; // 21.146743185077675%2C-86.78885941594436

const center = [21.133207, -86.742121];
const cente = [21.13, -86.74];
const center2 = [21.146743185077675, -86.78885941594436]; //21.137305383315613 -86.75806532906708
const center3 = [21.137305383315613, -86.75806532906708];
const center4 = [21.129467, -86.749298];

const blackOptions = { color: "green" };
const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
];

const Map = ({ coordenadas }) => {
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
        <Rectangle bounds={rectangle} pathOptions={blackOptions} />
        <Circle
          center={center}
          pathOptions={blackOptions}
          radius={200}
        /> 34 <Circle center={cente} pathOptions={blackOptions} radius={200} />
        <Circle center={center2} pathOptions={blackOptions} radius={200} />
        <Circle center={center3} pathOptions={blackOptions} radius={200} />
        <Circle center={center4} pathOptions={blackOptions} radius={200} />
      </MapContainer>
    </div>
  );
};

export default Map;
