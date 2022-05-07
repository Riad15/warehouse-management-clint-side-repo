
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Home/Header';
import Home from './Component/Home/Home';
import Login from './Component/Home/Security/Login/Login';
import Register from './Component/Home/Security/Register/Register';
import RequareAuth from './Component/Home/Security/RequareAuth/RequareAuth';
import AddProduct from './Component/ManageINventory/Add/AddProduct';
import ManageInventory from './Component/ManageINventory/ManageInventory';
import UpdateProduct from './Component/ManageINventory/Update/UpdateProduct';
import MYOrder from './Component/Order/MYOrder';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/addProduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/inventory/:id' element={<UpdateProduct></UpdateProduct>}></Route>
        <Route path='/inventory' element={
          <RequareAuth>
            <ManageInventory></ManageInventory>
          </RequareAuth>
        }></Route>
        <Route path='/order' element={
          <RequareAuth>
            <MYOrder></MYOrder>
          </RequareAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
