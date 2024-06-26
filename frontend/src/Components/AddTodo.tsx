
import { useState } from "react";
import Button from "../Components/Button";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todos } from "../store/todo";

const AddTodo = () => {
    console.log("add todo run");
    
    interface Todo{
        index : number | null;
        title : string | null;
        description : string | null;
    }
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');
    const todoObject = useRecoilValue(todos);
    const setTodos = useSetRecoilState(todos);
    const handleAddTodo = async (event : any)=>{
        event.preventDefault();
        const response = await axios.post("http://localhost:3000/api/v1/todo/addTodo" , {
            title ,
            description
        } , {
            headers:{
                "Content-type" : "Application/json",
                "token" : localStorage.getItem("token")
            }
        });

        if(response.data.done)
        {
            console.log("reached here")
            let alreadyDone : Todo[] = [];
            
            for(var i = 0 ;i<todoObject.length;i++)
            {
                alreadyDone.push(todoObject[i]);
            }
            alreadyDone.push({
                index : todoObject.length +1,
                title ,
                description

            });
            alert("Todo Added Successfully");
            setTitle('');
            setDescription('');
            setTodos(alreadyDone);
        }
        else{
            alert("error")
        }
    }
    
    return (
        <div className=' flex flex-col p-6 h-fit hover:shadow-lg transition duration-1000 w-fit shadow-md gap-4'>
            <input type="text" placeholder='title' className=' text-2xl' onChange={e=>setTitle(e.target.value)}/>
            <input type="text" placeholder='description'  onChange={e=>setDescription(e.target.value)}/>
            <Button text="Add Todo" clickHandler={handleAddTodo}></Button>
        </div>
    )
}

export default AddTodo