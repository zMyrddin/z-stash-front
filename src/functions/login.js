<<<<<<< HEAD
// login.js
import { useAuth } from "../context/AuthContext";

async function login(username, password) {
  const auth = useAuth();

  console.log(username, password);
=======
async function login(username, password){ 
    console.log(username, password);

    let result = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/users/login",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username: username, password: password}),
      }
    );

	let data = await result.json();
>>>>>>> parent of acfb0d1 (feat: playing around with AuthContext and UserContext to handle login context)

    console.log(data);

	return data;

<<<<<<< HEAD
  console.log(data);

  if (data.jwt) {
    // Assuming the server sends a JWT and user data upon successful login
    const { jwt, user } = data;
    auth.login(jwt, user);
  }

  return data;
=======
>>>>>>> parent of acfb0d1 (feat: playing around with AuthContext and UserContext to handle login context)
}

module.exports = {login}