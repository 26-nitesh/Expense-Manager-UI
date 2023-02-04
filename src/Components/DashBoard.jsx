import { Button } from 'react-bootstrap'
const DashBoard=()=>{
return(
  <div className="d-flex justify-content-center mt-5">
  <h2>DASH BOARD</h2><br></br>
    <Button href='addExpenses' className="mt-5"> Add Expenses</Button>
    <Button href='viewExpenses' variant="warning" className="mt-5 mx-5"> View Expenses</Button>
  </div>
)
}
export default DashBoard