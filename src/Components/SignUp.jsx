import { useFormik } from 'formik';
import { useState } from 'react';
import { Button, Card, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import './Login.css'
// import '../App.css';

const SignUP =()=>{

    const signupFormik = useFormik(
         {
              initialValues:{
                userName:"",
                email:"",
                mobile:"",
                password:"",

              }
         }

    )
        return (
      <Row>
        <Col>
          <Card style={{width:'40rem',height:'700px',margin:'120px',position:'absolute'}}>
            <div className='border border-dark mt-5 p-5 mb-5' style={{marginLeft:'90px',width:'500px'}}>
            <h2 className='text-center'>Sign  UP Here</h2>
            <Form onSubmit={signupFormik.handleSubmit}>
              <FormGroup>
              <FormLabel className='mt-5'>
            UserName
            </FormLabel>
              <FormControl type='text' name='userName' onChange={signupFormik.handleChange}>
     </FormControl>
     <FormGroup>
              <FormLabel className='mt-3'>
            Email
            </FormLabel>
              <FormControl type='email' name='email' onChange={signupFormik.handleChange}>
    
                </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel className='mt-3'>
            Phone
            </FormLabel>
              <FormControl type='text' name='mobile' onChange={signupFormik.handleChange}>
    
                </FormControl>
            </FormGroup>
            </FormGroup>
            <FormGroup>
              <FormLabel className='mt-3'>
            Password
            </FormLabel>
              <FormControl type='text' name='password' onChange={signupFormik.handleChange}>
    
                </FormControl>
            </FormGroup>
            <FormGroup>
              <Button className='bg-pimary mt-3' type='submit'>Register</Button>
              <Button className='bg-warning mt-3 mx-4' type='reset'>Reset</Button>
              <a href='/login'>Already have an Account ?</a>
            </FormGroup>
            </Form>
            </div>
          </Card>
        </Col>
      </Row>
        )

}
export default SignUP;