import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Card, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import './Login.css'
// import '../App.css';

const Login =()=>{
   
const validationLogin=yup.object(
    {
        userName:yup.string().required("required Field"),
        password:yup.string().required('cannot be empty')
    }
)
    const loginFormik = useFormik(
        {
            initialValues:{
                userName:"",
                password:"",
            },
            validationSchema:validationLogin,
            onSubmit:(values)=>{
                console.log(values);
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
        UserName/mobile
        </FormLabel>
          <FormControl type='text' name='userName' value={loginFormik.values.userName} error={loginFormik.touched.userName && Boolean(!loginFormik.errors.userName)} onChange={loginFormik.handleChange}>
 </FormControl>
      <Form.Text className="text-danger">
        {loginFormik.errors.userName}
        </Form.Text>
        </FormGroup>
        <FormGroup>
          <FormLabel className='mt-3'>
        Password
        </FormLabel>
          <FormControl type='text' name='password' value={loginFormik.values.password} error={loginFormik.touched.password && Boolean(!loginFormik.errors.password)} onChange={loginFormik.handleChange}>

            </FormControl>
            <Form.Text className="text-danger">
        {loginFormik.errors.userName}
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