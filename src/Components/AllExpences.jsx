import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { viewyourExpences } from "../Services/expenseService";

const AllExpences=()=>{

    const [expenceList, setExpences] = useState([])
    useEffect(() => {
        viewyourExpences(localStorage.getItem('email')).then((data) => {
            // console.log(data.data);
            setExpences(data.data);

        })
            .catch(err => {
                console.log("Something Went Wrong");
            })


    }, [])
    // console.log(expenceList);

    const display = expenceList.map(ele => {
        
        return (
            <Card className="mt-5 p-4 mx-1" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Catagory :{ele.catagory}</Card.Title>
                    <Card.Text>
                        Date: {ele.date}
                    </Card.Text>
                    <Card.Text>
                      Amount :  {ele.amount}
                    </Card.Text>
                    <Card.Text>
                      Remarks :  {ele.remarks}
                    </Card.Text>
                 
               <Button onClick={'deleteExpences'}>Delete</Button>
                </Card.Body>
            </Card>
        )
    })

    return(
<>
        <Row>
                {display}
        </Row>
         </>
    )
}
export default AllExpences;