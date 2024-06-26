
import { BrowserRouter , Route , Routes} from "react-router-dom";
import Home from './Pages/Home';
import LoginSignup from "./Pages/LoginSignup";

const Outlet = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/loginOrSignup" element={<LoginSignup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Outlet