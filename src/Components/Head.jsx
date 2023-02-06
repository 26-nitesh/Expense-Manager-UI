import { Container, Nav, Navbar } from "react-bootstrap"

const Head = ()=>{
    return(
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/dashboard">ExpenceManager.com</Navbar.Brand>
          <Nav className="me-left">
          <CallMe></CallMe>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Head;

const CallMe = ()=>{

   
        const removeUser=()=>{
            localStorage.removeItem('user');
            localStorage.removeItem('email')
          }
    

    if(localStorage.getItem('user')!=null){
       const email= localStorage.getItem('email');
        return(
            <>
                <Nav.Link href="/" onClick={removeUser}>LogOut</Nav.Link>
                {/* <Nav.Text >{email}</Nav.Text> */}
            </>
         
        )
     }else{
        return(
         <Nav.Link href="/">Login</Nav.Link>
        )
     }
}