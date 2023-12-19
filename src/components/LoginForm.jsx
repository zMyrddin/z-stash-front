import { login } from '../functions/login';
import { useEffect, useState } from 'react';

function LoginForm() {
const [jwt, setJwt] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log(`JWT Valuie is: \n${jwt}`);
  }, [jwt]);

  return (
    <div className="App">
      <label data-testid="zstash">Username:</label>
      <input 
        type="text" 
        name="usernameInput" 
        id="usernameInput" 
        value={username} 
        onChange={(event) => setUsername(event.target.value)} 
      />

      <label>Password:</label>
      <input 
        type="password" 
        name="passwordInput" 
        id="passwordInput" 
        value={password} 
        onChange={(event) => setPassword(event.target.value)} 
      />
      
      <button onClick={() => {login(username, password)}}>
        Log In
      </button>
    

    </div>
  );
}

export default LoginForm;