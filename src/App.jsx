import Header from './components/Header';
import { AuthProvider } from './context/Authcontext';
// import Homepage from './pages/Home';
import FireLogo from "./images/Firefly.png";




function App() {
return (
  <AuthProvider>

      <div>  
        <img
          className="fire-logo"
          src={FireLogo}
          alt={"Fire Logo"}
          style={{ width: "100px", height: "100px" }}
        />
        <Header />


      </div>

  </AuthProvider>

  );

  
}

export default App;