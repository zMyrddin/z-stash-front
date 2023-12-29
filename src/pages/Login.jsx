import React, { useState, useContext } from "react"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { setIsLoggedIn } = useContext(AuthContext); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post(
          process.env.REACT_APP_BACKEND_URL + "/users/login",
            {
                username,
                password,
            }
        );
    
        console.log("Response data:", response.data);
    
        const { data } = response;
      

      localStorage.setItem("token", data.jwt);
      localStorage.setItem("userId", data._id);
      localStorage.setItem("username", data.username); 
      console.log("Stored token:", data.jwt);
      setMessage("Welcome "+data.username); 
      setIsLoggedIn(true); 

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        {error && <p>{error}</p>}
        {location.state?.message && (
          <p>{location.state.message}</p>
        )}
        {message && <p>{message}</p>}{" "}
        <form onSubmit={handleSubmit}>
          <div>
            <label
                htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;