import { useState } from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    country: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorRegister, setErrorRegister] = useState(false);
  let navigate = useNavigate();

  const handleCreateUser = async(e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post("http://localhost:4000/api/v1/users/register", user);
      console.log(response);
      navigate("../login", { replace: true });
    } catch(error) {
      console.log(error);
      setErrorRegister(true);
    }
  };

  const handleCheckPassword = (e) => {
    if (e.target.value !== user.password){
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <div className="container">
      <img src="/img/wave.svg" alt="wave" className="img" />
      <div className="register-container">
        <h1>Registro</h1>
        <form onSubmit={handleCreateUser}>
          <input type="text" autoFocus name="nombre" id="" placeholder="Nombre"  onChange={e => setUser({...user, name: e.target.value})} />
          <input type="text" name="apellido" id="" placeholder="Apellido" onChange={e => setUser({...user, lastname: e.target.value})} />
          <input type="email" name="email" id="" placeholder="Email" onChange={e => setUser({...user, email: e.target.value})} />
          <input
            type="text"
            name="nacionalidad"
            id=""
            placeholder="Nacionalidad"
            onChange={e => setUser({...user, country: e.target.value})}
          />
          <input
            type="password"
            name="contraseña"
            id=""
            placeholder="Contraseña"
            onChange={e => setUser({...user, password: e.target.value})}
          />
          <input
            type="password"
            name="contraseña2"
            id=""
            placeholder="Confirmar Contraseña"
            onChange={handleCheckPassword}
          />
          {error && <p className="error">Las contraseñas no coinciden</p>}
          {errorRegister && <p className="error">Algo salio mal</p>}

          <input type="submit" value="Registrar" />
        </form>
        <div className="register-footer">
          <p>¿Ya tienes cuenta?</p>
          <Link to="/login">Iniciar Sesion</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
