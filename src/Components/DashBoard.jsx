import { Button } from 'react-bootstrap'
import { redirect,useNavigate } from 'react-router';
import { Redirect } from 'react-router-dom';
import Login from './Login';
import NotLogin from './NotLogin';
const DashBoard=()=>{
    const navigate = useNavigate();
 const user= localStorage.getItem('user');
const removeUser=()=>{
  localStorage.removeItem('user');
  localStorage.removeItem('email')
}
  
if(user!==null){
    return(
        <div className="d-flex justify-content-center mt-5">
        <h2>
         Welcome    {user}
        </h2>
          <Button href='/addExpenses' className="mt-5"> Add Expenses</Button>
          <Button href='/viewExpenses' variant="warning" className="mt-5 mx-5"> View Expenses</Button>
        </div>
      )
}else{
 return (
    <NotLogin page='dashboard'></NotLogin>
 )
}
}
export default DashBoard