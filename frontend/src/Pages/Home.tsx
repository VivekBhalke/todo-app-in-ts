import { Link } from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { user } from "../store/user";
import Appbar from "../Components/Appbar";
import Button from "../Components/Button";
import AddTodo from "../Components/AddTodo";
import { useEffect } from "react";
import axios from "axios";
import DisplayTodo from "../Components/DisplayTodo";
import { todos } from "../store/todo";
import { Todo } from "../store/todo";
const Home = () => {
  console.log("home ran again");
  
  const userObject = useRecoilValue(user);
  const setUser = useSetRecoilState(user);
  const todoObject = useRecoilValue(todos);
  const setTodos = useSetRecoilState(todos);
  useEffect(()=>{
    async function getTodos(){
      const response = await axios.get("https://todo-app-in-ts-5.onrender.com/api/v1/todo/getAllTodos",{
        headers:{
          "Content-type" : "Application/json",
          "token" : localStorage.getItem("token")
        }
        
      })
      if(response.data.todos)
      {
        setTodos(response.data.todos);
      }
      else{
        setTodos([]);
      }
    }
    getTodos();
  } , [user])
  if(!userObject.id)
  {
    return (
      <div className=" flex p-6 gap-6 w-screen h-screen pt-[70px]  justify-between">
          <div className=" flex flex-col gap-4">
              <h1 className=" text-[150px] text-black hover:text-gray-700 transition duration-1000 "
              >Todo App</h1>
              <p className=" text-[35px] text-black hover:text-gray-700 transition duration-1000">Add , Get , and see what </p>
              <p className=" text-[35px] text-black hover:text-gray-700 transition duration-1000">you have planned</p>
          </div>
          <div className=" pt-[200px]">
              <Link to={"/loginOrSignup"}>
                  <button className=" p-4 bg-purple-500 text-white hover:bg-purple-950 rounded-md transition duration-1000">Login or Signup</button>
              </Link>
          </div>
      </div>
    )
  }
  
  const handleLogout = async (event :any)=>{
    event.preventDefault();
    localStorage.removeItem("token");
    setUser({
      id : null ,
      name : null,
      email : null ,
    });

  }
  return(
    <div className="flex flex-col gap-6 pt-14 px-24 w-screen h-screen ">
      <Appbar name={userObject.name as string}/>
      <div className=" flex p-0 m-0 justify-between">
        <AddTodo></AddTodo>
        <div className=" pt-[100px] px-4">
          <Button text="Logout" clickHandler={handleLogout}></Button>
        </div>
      </div>
      <div className=" p-0 m-0 flex flex-wrap gap-6">
          {
            todoObject ? todoObject.map((element : Todo  , index )=>{
              return(
                <DisplayTodo index={index+1} title={element.title as string} description={element.description as string}/>
              )
            }) : "No todos"
          }
        </div>
    </div>
  )
  
}

export default Home