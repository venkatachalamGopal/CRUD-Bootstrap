import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Routes,Route } from 'react-router-dom';
import AddUsers from './addusers';
import Edituser from './Edituser'

import {TableExample} from './Table'



function App() {
  

  return (
    <div className='container-fluid'>
      <Routes>
       <Route path='/' element={<TableExample/>}/>
      <Route path='/add-user' element={<AddUsers/>}/>
      <Route path='/edit-user/:id' element={<Edituser/>}/>
      </Routes>
    </div>
  );
}

export default App;
