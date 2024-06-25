import express , {Router} from "express";
const router : Router = express.Router();

import loginController from "../../controllers/user/login";
import signupController from "../../controllers/user/signup";
import zodVerify from "../../middleware/zodVerify";
import tokenVerify from "../../middleware/tokenVerify";
import me from "../../controllers/user/me";

router.post("/login" ,zodVerify , loginController);
router.post("/signup", zodVerify,signupController);
router.get("/me" , tokenVerify , me);

export default router;