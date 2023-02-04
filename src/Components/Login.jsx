import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Card, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import './Login.css'
import { login } from '../Services/UserService';
import { useNavigate } from 'react-router';
// import '../App.css';

const Login =()=>{
    const navigate =useNavigate();
const validationLogin=yup.object(
    {
        email:yup.string().required("required Field"),
        password:yup.string().required('cannot be empty')
    }
)
    const loginFormik = useFormik(
        {
            initialValues:{
                email:"",
                password:"",
            },
            validationSchema:validationLogin,
            onSubmit:async (values)=>{
             const response =await  login(values)
             if(response.status==100){
              navigate('/dashboard')
             }
               console.log(response);
                loginFormik.resetForm();
            }
        }
    )
    return (
  <Row>
    <Col>
      <Card style={{width:'40rem',height:'500px',margin:'120px',position:'absolute'}}>
        <div className='border border-dark mt-5 p-5 mb-5' style={{marginLeft:'90px',width:'500px'}}>
        <h2 className='text-center'>Login Here</h2>
        <Form onSubmit={loginFormik.handleSubmit}>
          <FormGroup>
          <FormLabel className='mt-5'>
        Email/mobile
        </FormLabel>
          <FormControl type='text' name='email' value={loginFormik.values.email} error={loginFormik.touched.email && Boolean(!loginFormik.errors.email)} onChange={loginFormik.handleChange}>
 </FormControl>
      <Form.Text className="text-danger">
        {loginFormik.errors.email}
        </Form.Text>
        </FormGroup>
        <FormGroup>
          <FormLabel className='mt-3'>
        Password
        </FormLabel>
          <FormControl type='text' name='password' value={loginFormik.values.password} error={loginFormik.touched.password && Boolean(!loginFormik.errors.password)} onChange={loginFormik.handleChange}>

            </FormControl>
            <Form.Text className="text-danger">
        {loginFormik.errors.password}
        </Form.Text>
        </FormGroup>
        <FormGroup>
          <Button className='bg-pimary mt-3' type='submit'>Login</Button>
          <Button className='bg-warning mt-3 mx-4' type='reset'>Reset</Button>
          <a href='/sign-up'>Don't have Account ?SignUP</a>
        </FormGroup>
        </Form>
        </div>
      </Card>
    </Col>
  </Row>
    )
}
export default Login;