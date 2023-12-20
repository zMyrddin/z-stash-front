import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RedirectHomeButton from './components/RedirectHomeButton';
import { Route, Routes } from 'react-router-dom';
import StashList from './pages/StashList';


function App() {
return (
  <div>  
    <RedirectHomeButton />
    <LoginForm />
    <Routes>
      <Route path="/stashlist" element={<StashList />} />    
    </Routes>
    <Navbar />
  </div>


  );

  
}

export default App;
