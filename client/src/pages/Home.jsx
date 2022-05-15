import {useState, useContext, useEffect } from "react";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Star from "../components/Star";
import InfoPopUp from "./InfoPopUp";
import UserContext from "../context/user/UserContext";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <h1 className="title">¡Bienvenido!</h1>
      <div className="text-1-container">
        <div>
          <div className="text-1">
            <p>
              Action for the ocean es un proyecto que ayudara a la conservación
              de playas y oceanos de México
            </p>
          </div>
        </div>
        <div className="text-2">
          <p>
            “La basura que se genera a partir de los productos de consumo es una
            gran problematica, ya que con el tiempo esto se convierte en
            desechos marinos que contaminan rios y oceanos y estos a su vez
            afectan a la vida marina.”
          </p>
        </div>
      </div>
      <div className="text-2-container">
        <div className="text-1">
          <p>¿Como enfrentamos este problema con ACTION FOR THE OCEAN?</p>
        </div>
        <div className="text-3">
          <p>
            Ayudanos a monitorear cada playa de mexico. Ayudanos a crear
            conciencia. Ayudanos a crear comunidades de limpieza de playas.
          </p>
        </div>
      </div>
      <div className="text-4">
        <h2>Por Medio de:</h2>
        <p>
          Una app que nos mostrara el estado de la playa donde te encuntres.
          Podras Calificar el estado de la playa donde te encuentres. Recibiras
          insignias acorde a tu nivel de actividad. Proximamente contaremos con
          una fucion que te permitira organizar brigadas de limpieza.
        </p>
      </div>
      <h2 className="sub-title">Califica tu playa</h2>
      <Map coordenadas={[21.146743185077675, -86.78885941594436]}/>
      <div className="calificacion">
        <p>Terrible</p>
        <p>Reluciente</p>
      </div>
      <div className="stars-container">
        <div className="stars">
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={true} />
          <Star selected={false} />
          <Star selected={false} />
        </div>
      </div>
      <div className="btn-container">
        <button onClick={() => setShowPopUp((prev) => !prev)} className="btn">
          ¿Como Funciona?
        </button>
      </div>
      <InfoPopUp state={showPopUp} setState={setShowPopUp} />
    </div>
  );
};

export default Home;
