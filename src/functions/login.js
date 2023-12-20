import { useAuth } from "../context/AuthContext";


async function login(username, password) {
  console.log(username, password);

  let result = await fetch(
    process.env.REACT_APP_BACKEND_URL + "/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    }
  );

  let data = await result.json();

  console.log(data);

  const { login } = useAuth();

  if (data.jwt) {
    // Assuming the server sends a JWT and user data upon successful login
    const { jwt, user } = data;
    login(jwt, user);
  }

  return data;
}

export default login;
