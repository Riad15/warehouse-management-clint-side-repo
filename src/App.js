
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Component/Home/Banner';
import Footer from './Component/Home/Footer';
import Header from './Component/Home/Header';
import Home from './Component/Home/Home';
import Login from './Component/Home/Security/Login/Login';
import Register from './Component/Home/Security/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
