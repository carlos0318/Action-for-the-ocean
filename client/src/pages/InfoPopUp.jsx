import React from "react";
import { IoClose } from "react-icons/io5";
import "../styles/InfoPopUp.css";

const InfoPopUp = ({ state, setState }) => {
  console.log(state);
  return (
    <div className={`info ${state ? "info--show" : "info--hide"}`}>
      <div className="info__title-container">
        <h2>Semaforo</h2>
        <button onClick={() => setState((prev) => !prev)}>
          <IoClose size="40px" />
        </button>
      </div>
      <article className="info__container">
        <h3>¿Como funciona nuestra app?</h3>
        <p>
          Funciona atravez de un sistema de semaforo el cual te indica el nivel
          de contaminacion en el sitio de acurdo a tus cordenadas.{" "}
        </p>
      </article>
      <div className="info__colors">
        <div className="colors__ref">
          <div className="colors__ref--red"></div>
          <div className="colors__ref__text">
            <span>Luz Roja</span>
            <p>
              El nivel de contaminacion en la zona es demaciado alto, no
              recomendable para acudir al sitio, por favor te suplicamos tu
              ayuda recogiendo residuos de basura.
            </p>
          </div>
        </div>
        <div className="colors__ref">
          <div className="colors__ref--yellow"></div>
          <div className="colors__ref__text">
            <span>Luz Amarilla</span>
            <p>
              El nivel de contaminacion en la zona es medio,se recomienda
              precaucion al acudir ayudanos recogiendo residuos de basura en el
              sitio.
            </p>
          </div>
        </div>
        <div className="colors__ref">
          <div className="colors__ref--green"></div>
          <div className="colors__ref__text">
            <span>Luz Verde</span>
            <p>
              El nivel de contaminacion en la zona es bajo perfecto para
              realizar tus actividades, ayudanos a mantener la zona limpia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPopUp;
