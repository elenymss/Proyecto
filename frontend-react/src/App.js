import ViewPrincipal from './view/ViewPrincipal.jsx';
import ViewNosotros from './view/ViewNosotros.jsx';
import ViewAdmin from'./view/admin/ViewAdmin.jsx';
import ViewAdmin2 from'./view/admin/ViewAdmin2.jsx';
import ViewAdmin3 from './view/admin/ViewAdmin3.jsx';
import ViewAdmin4 from './view/admin/ViewAdmin4.jsx';
//componentes
import CompCreateUser from './view/admin/compUser/CreateUser.jsx';
import CompEditUser from './view/admin/compUser/EditUser.jsx';
import CompCreateAdmin from './view/admin/compAdmin/CreateAdmin.jsx';
import Login from './view/Login.jsx';
import Registro from './view/Registro.jsx'

//import router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    // <div>
    //   <Index/>
    // </div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ViewPrincipal/>}></Route>
        <Route path='/nosotros' element={<ViewNosotros/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registro' element={<Registro/>}></Route>
        <Route path='/admin' element={<ViewAdmin/>}></Route>
        <Route path='/admin/aprendiz' element={<ViewAdmin2/>}></Route>
        <Route path='/admin/admin' element={<ViewAdmin3/>}></Route>
        <Route path='/admin/artesanias' element={<ViewAdmin4/>}></Route>
        <Route path='/admin/aprendiz/create' element={<CompCreateUser/>}></Route>
        <Route path='/admin/admin/create' element={<CompCreateAdmin/>}></Route>
        <Route path='/admin/aprendiz/edit/:id' element={<CompEditUser/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App;
