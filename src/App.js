import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import NavBar from './component/NavBar/NavBar';
import Tost from './component/Tost/Tost';



function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Tost></Tost>
    </div>
  );
}

export default App;
