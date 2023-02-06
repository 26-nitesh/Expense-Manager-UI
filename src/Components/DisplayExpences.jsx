import { Button } from "react-bootstrap";
import AllExpences from "./AllExpences";
import NotLogin from "./NotLogin";

const ViewExpenses = ()=>{
    // const removeUser=()=>{
    //     localStorage.removeItem('user');
    //     localStorage.removeItem('email')
    //   }
    if (localStorage.getItem('user')!=null) {
        return(
            <>
            <h1> Your All Expences</h1>
            {/* <Button href='/' className="mt-5 mx-5" onClick={removeUser}>LogOut</Button> */}
            {/* <Button href='/dashboard' variant="warning" className="mt-5 mx-5"> DashBoard</Button> */}
            <AllExpences></AllExpences>
            </>
                )
    } else {
        return(
            <NotLogin page='view expences'></NotLogin>
        )
    }
}

export default ViewExpenses;