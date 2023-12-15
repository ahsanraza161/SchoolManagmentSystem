import authModel from '../DB/Model/AuthModel.js';
import jwt from 'jsonwebtoken';
<<<<<<< HEAD
import bcrypt from 'bcryptjs';
=======
import bcrypt from 'bcryptjs'
>>>>>>> backend-dev
const createUser = async (req, res) => {
  try {
    const { email, password, phone, firstName,lastName ,userType} = req.body;
    const existingUser = await authModel.findOne({ email });

    if (existingUser) {
      return res.send('User Already Exists');
    }


    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)
    // res.send(secPass)



    const createNewUser = await authModel.create({
      firstName : req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: secPass,
      userType: req.body.userType
    });

<<<<<<< HEAD
    const salt = await bcrypt.genSalt(10);
    createNewUser.password = await bcrypt.hash(password, salt);
=======


    

>>>>>>> backend-dev
    const CreatedUser = await authModel
      .findById(createNewUser._id)
      .select('-password');

    return res.send(CreatedUser);
  } catch (err) {
    console.log(err);
    return res.send(err.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await authModel.findOne({ email });

    if (!existingUser) {
      return res.json({
        status: false,
        msg: 'User not found',
      });
    }

    if (existingUser.password !== password) {
      return res.json({
        status: false,
        msg: 'Wrong Password',
      });
    }

    return res.json({
      status: true,
      msg: 'User Logged In Successfully',
      data: existingUser,
    });
  } catch (err) {
    console.log(err);
    return res.send(err.message);
  }
};

const getProfile = async (req, res) => {
  const { token } = req.body;

  try {
    const user = jwt.verify(token, 'secret');
    console.log(user);
    return res.send(user);
  } catch (err) {
    console.log(err);
    return res.send(err.message);
  }
};

const createCourse = async(req,res) => {
  try {
    const { courseId, Instructor, courseName, duration } = req.body;

    const addCourse = await  {
      courseId,
      courseName,
      Instructor,
      duration
    }

  }
  catch (err) {
    console.log(err);
    return res.send(err.message);
  }
}


const AuthController = {
  createUser,
  login,
  getProfile,
  createCourse
};

export default AuthController;
