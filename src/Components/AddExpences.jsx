import { useFormik } from "formik";
import { Button, Card, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';



const AddExpenses = ()=>{

    const expanseFormik = useFormik(
        {
            initialValues:{
                catagory:"",
                date:"",
                amount:"",
                remarks:""
            },
            onSubmit:async (values)=>{
                
                expanseFormik.resetForm();
             }
            }
    )

    return(
        <Row>
        <Col>
          <Card style={{width:'40rem',height:'700px',margin:'120px',position:'absolute'}}>
            <div className='border border-dark mt-5 p-5 mb-5' style={{marginLeft:'90px',width:'500px'}}>
            <h2 className='text-center'>ADD Your Expenses</h2>
            <Form onSubmit={expanseFormik.handleSubmit}>
              <FormGroup>
              <FormLabel className='mt-5'>
           Catagory
            </FormLabel>
              <FormControl type='text' name='catagory' onChange={expanseFormik.handleChange}>
     </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel className='mt-3'>
            Date
            </FormLabel>
              <FormControl type='text' name='date'  onChange={expanseFormik.handleChange}>
    
                </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel className='mt-3'>
            Amount
            </FormLabel>
              <FormControl type='text' name='amount'  onChange={expanseFormik.handleChange}>
    
                </FormControl>
            </FormGroup>
            <FormGroup>
              <FormLabel className='mt-3'>
            Remarks
            </FormLabel>
              <FormControl type='text' name='remarks'  onChange={expanseFormik.handleChange}>
    
                </FormControl>
            </FormGroup>
            <FormGroup>
              <Button className='bg-pimary mt-3' type='submit'>Add</Button>
              <Button className='bg-warning mt-3 mx-4' type='reset'>Reset</Button>
            </FormGroup>
            </Form>
            </div>
          </Card>
        </Col>
      </Row>
    )
}

export default AddExpenses;