import axios from "axios";

const url ="http://localhost:4000/expences";
const expenseObj={
    email:"",
    catagory:"",
    date:"",
    amount:"",
    remarks:"",
}
function makeExpenseObject(email,expense){
     expenseObj.email=email;
    expenseObj.catagory=expense.catagory
    expenseObj.date=expense.date
    expenseObj.amount=expense.amount
    expenseObj.remarks=expense.remarks

    return expenseObj;
}
export const addNewExpenses=(expense)=>{
    const email= localStorage.getItem('email');
     const expObj= makeExpenseObject(email,expense)
     return axios.post(url,expObj).then(()=>{

     }).catch(()=>{

     })
}

export const viewyourExpences = (email)=>{
    const uri ="http://localhost:4000/expences?email="+email;
    // const data=null;
    // try {
        const expences= axios.get(uri);
     
    // } catch (error) {
        // console.log(error);
    // }

return expences;
}