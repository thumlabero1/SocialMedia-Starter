import "./App.css"
import Home from "./pages/home/Home";
import Profile from '../src/components/Profile/Profile'
import Auth from './pages/Auth/Auth'
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0' }}></div>
        <div className="blur" style={{top: '36%', left :'-8rem'}}></div>
        { <Home/> }
        { <Profile/> }
        <Auth/>
    </div>
  );
}

export default App;
