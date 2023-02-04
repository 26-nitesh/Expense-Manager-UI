import { useState } from 'react';
import { Button, Card, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import '../App.css';
const Home =()=>{
  const [user,setUser]=useState({
    userName:"",
    password:""
  })
  const handleOnChange=(event)=>{
    const eName= event.target.name;
    setUser(
      {...user,[eName]:event.target.value}
    )
  }
  const c=()=>{
    alert(user.userName)
  }
    return (
  <Row>
    <Col>
      <Card style={{width:'40rem',height:'500px',margin:'120px',position:'absolute'}}>
        <div className='border border-dark mt-5 p-5 mb-5' style={{marginLeft:'90px',width:'400px'}}>
        <h2 className='text-center'>Login Here</h2>
        <Form onSubmit={c}>
          <FormGroup>
          <FormLabel className='mt-5'>
        UserName
        </FormLabel>
          <FormControl type='text' name='userName' onChange={handleOnChange}>
 </FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel className='mt-3'>
        Password
        </FormLabel>
          <FormControl type='text' name='password' onChange={handleOnChange}>

            </FormControl>
        </FormGroup>
        <FormGroup>
          <Button className='bg-pimary mt-3' type='submit'>Login</Button>
          <Button className='bg-warning mt-3 mx-4' type='reset'>Reset</Button>
        </FormGroup>
        </Form>
        </div>
      </Card>
    </Col>
  </Row>
    )
}
export default Home;