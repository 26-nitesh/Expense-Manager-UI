import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddExpenses from './Components/AddExpences';
import DashBoard from './Components/DashBoard';
import ViewExpenses from './Components/DisplayExpences';
import Footer from './Components/Footer';
import Head from './Components/Head';
import Login from './Components/Login';
import SignUP from './Components/SignUp';


function App() {
  return (
    <div>
    <Head></Head>
   <BrowserRouter>
   <Routes>
    <Route path={'/login'} element={<Login></Login>}></Route>
    <Route path={'/'} element={<Login></Login>}></Route>
    <Route path={'sign-up'} element={<SignUP></SignUP>}></Route>
    {/* {localStorage.getItem('user') && */}
    <Route path={'/dashboard'} element={<DashBoard></DashBoard>}></Route>
    {/* } */}
    <Route path={'/addExpenses'} element={<AddExpenses></AddExpenses>}></Route>
    <Route path={'/viewExpenses'} element={<ViewExpenses></ViewExpenses>}></Route>
   </Routes>
   </BrowserRouter>
   <Footer></Footer>
    </div>
  );
}

export default App;
