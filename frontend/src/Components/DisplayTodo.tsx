
interface Todo{
    index : number;
    title : string;
    description : string;
}
const DisplayTodo = ({index , title , description} : Todo ) => {
  return (
    <div className=' flex flex-col p-6 h-fit hover:shadow-lg transition duration-1000 w-fit shadow-md gap-4'>
        <p className=''>Todo : {index}</p>
        <p  className=' text-2xl font-bold'>{title}</p>
        <p className=''>{description}</p>
    </div>
  )
}

export default DisplayTodo