import express , {Router} from "express"
const router : Router = express.Router();

import userRouter from "./userRoutes/index";
import todoRouter from "./todoRoutes/index";

router.use("/user" , userRouter);
router.use("/todo" , todoRouter);

export default router;