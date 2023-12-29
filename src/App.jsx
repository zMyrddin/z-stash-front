import Header from './components/Header';
import { AuthProvider } from './context/Authcontext';
// import Homepage from './pages/Home';
import FireLogo from "./images/Firelogov2.png";




function App() {
return (
  <AuthProvider>

      <div>  
      <img className="fire-logo" src={FireLogo} alt={"Fire Logo"}/>
        <Header />


      </div>

  </AuthProvider>

  );

  
}

export default App;