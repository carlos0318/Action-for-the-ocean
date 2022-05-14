import React from 'react'
import '../styles/Register.css'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='container'>
      <img src="../../public/img/wave.svg" alt="wave" className="img" />
        <div className="register-container">
            <h1>Registro</h1>
            <form action="">
                <input type="text" name="nombre" id="" placeholder="Nombre" />
                <input type="text" name="apellido" id="" placeholder="Apellido" />
                <input type="email" name="email" id="" placeholder="Email" />
                <input type="text" name="nacionalidad" id="" placeholder="Nacionalidad" />
                <input type="password" name="contraseña" id="" placeholder="Contraseña" />
                <input type="password" name="contraseña2" id="" placeholder="Confirmar Contraseña" />
        
                <input type="submit" value="Registrar" />
            </form>
            <div className="register-footer">
                <p>¿Ya tienes cuenta?</p>
                <Link to="/login">Iniciar Sesion</Link>
            </div>
        </div>
    </div>
  )
}

export default Register