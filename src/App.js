
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './Component/AllProducts/AllProducts';
import Blog from './Component/Blog/Blog';
import FourOFour from './Component/FourOFour/FourOFour';
import Header from './Component/Home/Header';
import Home from './Component/Home/Home';
import Login from './Component/Home/Security/Login/Login';
import Register from './Component/Home/Security/Register/Register';
import RequareAuth from './Component/Home/Security/RequareAuth/RequareAuth';
import AddProduct from './Component/ManageINventory/Add/AddProduct';
import ManageInventory from './Component/ManageINventory/ManageInventory';
import UpdateProduct from './Component/ManageINventory/Update/UpdateProduct';
import MYOrder from './Component/Order/MYOrder';
import Order from './Component/Order/Order';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/order/:id' element={
          <RequareAuth>
            <Order></Order>
          </RequareAuth>
        }></Route>
        <Route path='/addProduct' element={
          <RequareAuth>
            <AddProduct></AddProduct>
          </RequareAuth>
        }></Route>
        <Route path='/phones' element={<AllProducts></AllProducts>}></Route>
        <Route path='/inventory/:id' element={
          <RequareAuth>
            <UpdateProduct></UpdateProduct>
          </RequareAuth>
        }></Route>
        <Route path='/inventory' element={
          <RequareAuth>
            <ManageInventory></ManageInventory>
          </RequareAuth>
        }></Route>
        <Route path='/myorder/' element={
          <RequareAuth>
            <MYOrder></MYOrder>
          </RequareAuth>
        }></Route>

        <Route path='/*' element={<FourOFour></FourOFour>}></Route>
      </Routes>
    </div>
  );
}

export default App;
