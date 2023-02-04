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
    const uri='http://localhost:4000/user?userName='+user.email;
    const response= await findUserByField(uri);
    if(response.data.length==0){
         uri='http://localhost:4000/user?mobile='+user.email;
         response = await findUserByField(uri)
         console.log(response.data);
    }
}

async function  findUserByField(uri){
    try{
        const response = await axios.get(uri);
       return response;
    }catch{
      return null;
    }

}