import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddExpenses from './Components/AddExpences';
import DashBoard from './Components/DashBoard';
import Login from './Components/Login';
import Main from './Components/Main';
import SignUP from './Components/SignUp';


function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path={'login'} element={<Login></Login>}></Route>
    <Route path={'/'} element={<Login></Login>}></Route>
    <Route path={'sign-up'} element={<SignUP></SignUP>}></Route>
    <Route path={'/dashboard'} element={<DashBoard></DashBoard>}></Route>
    <Route path={'/addExpenses'} element={<AddExpenses></AddExpenses>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
