import { Router} from "express";
import AuthController from "../Controller/AuthController.js";
import auth from '../middleware/auth.js'
import authModel from '../DB/Model/AuthModel.js';



export let AuthRouters = Router();

AuthRouters.route("/signup").post(AuthController.createUser)
AuthRouters.route("/login").post(AuthController.login)
AuthRouters.route("/getprofile").post( auth , async (req, res) => {
  try {
    const userid = req.user.id;
    const user = await authModel.findById(userid).select('-password');
    res.send(user)
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: 400,
      msg: "Server Error"
    });
  }   
});
// AuthRouter.routte("/addcourses").post(AuthController.createCourse);