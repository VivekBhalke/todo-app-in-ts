import  { useEffect } from 'react'
import {user} from "./store/user";
import { useRecoilValue, useSetRecoilState } from 'recoil';
// import LoginSignup from './Pages/LoginSignup';
import axios from "axios"
import Outlet from './Outlet';
const InitUser = () => {
  const setuser = useSetRecoilState(user);
  const userObject = useRecoilValue(user);
  console.log("this is the userObject : " , userObject);
  useEffect(()=>{

    async function verifyUser(){
        console.log("init user ran");
        console.log("this is the token : " , localStorage.getItem("token"));
        const response = await axios.get("https://todo-app-in-ts-5.onrender.com/api/v1/user/me" , {
            headers: {
                'Content-Type': 'application/json',
                'token' : localStorage.getItem("token")
            }
        })
       
        if(response.data.object){
            console.log("this is the response : " + response.data.object);
            setuser(response.data.object);
        }
        else{
            console.log("null")
            setuser({
                name : null,
                email : null,
                id : null
            });
        }
    }
    verifyUser();
  } , [])
  return (
    <Outlet></Outlet>
  )
}

export default InitUser