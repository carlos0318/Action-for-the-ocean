import { useState } from "react";
import '../styles/Login.css';
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    try {
      const response = await axios.post("http://localhost:4000/api/users/login", user);
      console.log(response);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="container">
      <img src="/img/wave.svg" alt="wave" className="img" />
      <div className="login-box">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />

          {error && <p className="error">Contraseña o correo incorrectos</p>}
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
