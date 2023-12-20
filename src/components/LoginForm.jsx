/* eslint-disable no-unused-vars */

import { useUser } from '../context/UserContext';
import login  from '../functions/login';
import { useEffect, useState } from 'react';

function LoginForm() {
  const { login: userLogin } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const result = await login(username, password);
    // Assuming your login function returns user data upon successful login
    if (result.success) {
      userLogin(result.user);
    }
  };

  return (
    <div className="App">
      {/* Your form inputs */}
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LoginForm;