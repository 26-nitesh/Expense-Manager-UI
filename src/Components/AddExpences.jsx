import { useFormik } from "formik";
import { Button, Card, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { addNewExpenses } from "../Services/expenseService";
import NotLogin from "./NotLogin";



const AddExpenses = () => {

  const expanseFormik = useFormik(
    {
      initialValues: {
        catagory: "",
        date: "",
        amount: "",
        remarks: ""
      },
      onSubmit: async (values) => {

        addNewExpenses(values).then(() => {
          alert('added sucessfully')
        })
        expanseFormik.resetForm();
      }
    }
  )
  const removeUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('email')
  }
  if (localStorage.getItem('user') != null) {
    return (
      <Row>
        <Col>
          <Card style={{ width: '40rem', height: '700px', margin: '120px', position: 'absolute' }}>
            <div className='border border-dark mt-5 p-5 mb-5' style={{ marginLeft: '90px', width: '500px' }}>
              <h2 className='text-center'>ADD Your Expenses</h2>
              <Form onSubmit={expanseFormik.handleSubmit}>
                <FormGroup>
                  <FormLabel className='mt-5'>
                    Catagory
                  </FormLabel>
                  <FormControl type='text' name='catagory' value={expanseFormik.values.catagory} onChange={expanseFormik.handleChange}>
                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <FormLabel className='mt-3'>
                    Date
                  </FormLabel>
                  <FormControl type='date' name='date' value={expanseFormik.values.date} onChange={expanseFormik.handleChange}>

                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <FormLabel className='mt-3'>
                    Amount
                  </FormLabel>
                  <FormControl type='text' name='amount' value={expanseFormik.values.amount} onChange={expanseFormik.handleChange}>

                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <FormLabel className='mt-3'>
                    Remarks
                  </FormLabel>
                  <FormControl type='text' name='remarks' value={expanseFormik.values.remarks} onChange={expanseFormik.handleChange}>

                  </FormControl>
                </FormGroup>
                <FormGroup>
                  <Button className='bg-pimary mt-3' type='submit'>Add</Button>
                  <Button className='bg-warning mt-3 mx-4' type='reset'>Reset</Button>
                </FormGroup>
              </Form>
            </div>
          </Card>
          {/* <Button href='/' className="mt-5 mx-5" onClick={removeUser}>LogOut</Button> */}
          <Button href='/viewExpenses' variant="warning" className="mt-5 mx-5"> View Expenses</Button>
        </Col>
      </Row>
    )
  } else {

    return (
      <NotLogin page='add Expences'></NotLogin>
    )
  }

}

export default AddExpenses;