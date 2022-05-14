import React from "react";
import '../styles/Login.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <img src="../../public/img/wave.svg" alt="wave" className="img" />
      <div className="login-box">
        <h1>Iniciar Sesion</h1>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <input type="submit" value="Iniciar Sesion" />
          <div className="login-footer">
            <p>¿No tienes cuenta?</p>
            <Link to="/register">Registrate Aqui</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
