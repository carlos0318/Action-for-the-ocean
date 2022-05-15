import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user/UserContext";
import { useNavigate } from "react-router-dom";
import '../styles/Profile.css';
import axios from "axios";

const Profile = () => {
  const { user, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name);
  const [lastname, setLastname] = useState(user?.lastname);
  const [country, setCountry] = useState(user?.country);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState(user?.password);


  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(()=> {
    const getInfoUser = async () => {
      const res = await axios.post(`http://localhost:4000/api/v1/users/update`, {email, password});
      const { lastname, country } = res.data.message;
      setLastname(lastname);
      setCountry(country);
    }
    getInfoUser();
  }, [email, password]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:4000/api/v1/users/update`,{
          name,
          lastname,
          country,
          email,
          password
        });
      console.log("User updated");
      dispatch({
        type: "GET_USER",
        payload: {name, email, password},
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="profile-container">
      <div className="profile-container-form">
        <h1>Ajustes</h1>
        <form onSubmit={handleUpdate}>
          <label htmlFor="name"></label>
          <input type="text" name="name" id="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
          <label htmlFor="lastname"></label>
          <input type="text" name="lastname" id="lastname" placeholder="lastname" value={lastname} onChange={e => setLastname(e.target.value)} />
          <label htmlFor="country"></label>
          <input type="text" name="country" id="country" placeholder="country" value={country} onChange={e => setCountry(e.target.value)} />
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="password"></label>
          <input type="password" name="password" id="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          <input type="submit" value="Guardar" />
        </form>
      </div>
      <img src="/img/wave.svg" alt="wave" className="profile-img" />
    </div>
  );
};

export default Profile;
