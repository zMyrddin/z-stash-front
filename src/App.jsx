import Header from './components/Header';
import { AuthProvider } from './context/Authcontext';




function App() {
return (
  <AuthProvider>

      <div>  
        <Header />


      </div>

  </AuthProvider>

  );

  
}

export default App;