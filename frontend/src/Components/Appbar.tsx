interface AppbarProps{
    name : string;
}
const Appbar = ({name} : AppbarProps) => {
  return (
    <div className=" flex justify-between  ">
        <h1 className=" text-2xl text-gray-800 hover:text-gray-950 transition duration-1000"
        >TodoApp</h1>
        <p className=" text-2xl text-gray-800 hover:text-gray-950 transition duration-1000">{name}</p>
    </div>
  )
}

export default Appbar