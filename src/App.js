import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './Components/DashBoard';
import Login from './Components/Login';
import SignUP from './Components/SignUp';


function App() {
  return (
    <div>
  
   <Home></Home>
   <BrowserRouter>
   <Routes>
    <Route path={'login'} element={<Login></Login>}></Route>
    <Route path={'sign-up'} element={<SignUP></SignUP>}></Route>
    <Route path={'/dashboard'} element={<DashBoard></DashBoard>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
