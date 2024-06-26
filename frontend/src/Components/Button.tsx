
interface ButtonProps {
    text : string ,
    clickHandler : (event: any) => Promise<void> 
}
const Button = ({text   , clickHandler} : ButtonProps) => {
  return (
    <button className=" shadow-lg p-5 bg-purple-400 rounded-2xl  hover:bg-purple-900 transition duration-1000 hover:text-white " onClick={clickHandler}>{text}</button>
  )
}

export default Button