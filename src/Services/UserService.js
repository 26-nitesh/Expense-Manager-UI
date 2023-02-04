import axios from "axios";
const url="http://localhost:4000/user";
const RESPONSE={
    status:0,
    msg:'',
    user:'',
}
export const register=  (user)=>{

      return  axios.post(url,user).then(()=>{
         
    }).catch(()=>{

    })
}


export const login= async (user)=>{
    const response= await findUserByField(user.email);
    if(response.data[0].password==user.password){
        RESPONSE.status=100
        RESPONSE.msg='Login Sucess'
        RESPONSE.user=response.data[0].userName;
    }
    return RESPONSE
}

async function  findUserByField(field){
    const uri='http://localhost:4000/user?email='+field;
    try{
        console.log(uri);
        const response = await axios.get(uri);
       return response;
    }catch{
      return null;
    }

}