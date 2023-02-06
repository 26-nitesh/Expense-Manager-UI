import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { Button, Card, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import './Login.css'
import { register } from '../Services/UserService';
// import '../App.css';

const SignUP =()=>{

    const signupValidation = yup.object(
        {
          userName:yup.string().required("required !!"),
          email:yup.string().required("required !!"),
          mobile:yup.number().required("phone  can be only number and is required !!"),
          password:yup.string().required("required !!")
        }
      )

    const signupFormik = useFormik(
         {
              initialValues:{
                userName:"",
                email:"",
                mobile:"",
                password:"",

              },
              validationSchema:signupValidation,
              onSubmit:(values)=>{
                console.log(values);
                register(values).then(()=>{
                    console.log("okk");
                    alert('registered sucessfuly kindly login')
                })
                signupFormik.resetForm();
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
              <FormControl type='text' name='userName' value={signupFormik.values.userName} error={signupFormik.touched.userName && Boolean(!signupFormik.errors.userName)} onChange={signupFormik.handleChange}>
     </FormControl>
     <Form.Text className="text-danger">
        {signupFormik.errors.userName}
        </Form.Text>
     <FormGroup>
              <FormLabel className='mt-3'>
            Email
            </FormLabel>
              <FormControl type='email' name='email' value={signupFormik.values.email} error={signupFormik.touched.email && Boolean(!signupFormik.errors.email)} onChange={signupFormik.handleChange}>
    
                </FormControl>
                <Form.Text className="text-danger">
        {signupFormik.errors.email}
        </Form.Text>
            </FormGroup>
            <FormGroup>
              <FormLabel className='mt-3'>
            Phone
            </FormLabel>
              <FormControl type='text' name='mobile' value={signupFormik.values.mobile} error={signupFormik.touched.mobile && Boolean(!signupFormik.errors.mobile)} onChange={signupFormik.handleChange}>
    </FormControl>
    <Form.Text className="text-danger">
        {signupFormik.errors.mobile}
        </Form.Text>
            </FormGroup>
            </FormGroup>
            <FormGroup>
              <FormLabel className='mt-3'>
            Password
            </FormLabel>
              <FormControl type='password' name='password' value={signupFormik.values.password} error={signupFormik.touched.password && Boolean(!signupFormik.errors.password)} onChange={signupFormik.handleChange}>
    
                </FormControl>
                <Form.Text className="text-danger">
        {signupFormik.errors.password}
        </Form.Text>
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