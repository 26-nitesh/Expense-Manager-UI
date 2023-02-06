import { Container, Navbar } from "react-bootstrap"

const Footer = ()=>{
    return(
        <Navbar bg="dark" fixed="bottom" expand='lg' variant="dark">
        <Container>
          <Navbar.Text >copyright@epenseManager.com  2022-2023</Navbar.Text>
        </Container>
      </Navbar>
    )
}
export default Footer;