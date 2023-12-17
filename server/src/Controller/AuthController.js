import authModel from '../DB/Model/AuthModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();



const createUser = async (req, res) => {
  try {
    const { email, password, phone, firstName,lastName ,userType,fatherName,grade,section,age} = req.body;
    const existingUser = await authModel.findOne({ email });

    if (existingUser) {
      return res.send('User Already Exists');
    }


    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)



    const createNewUser = await authModel.create({
      firstName, 
      lastName,
      fatherName,
      email,
      phone,
      password: secPass,
      userType,
      grade,
      section,
      age
    });

    const payload = {
      user:{
        id:createNewUser.id
      }
    }
    // let authToken = jwt.sign(payload, process.env.JWTSCERET ,{
    //   expiresIn:3600000
    // },(err,token) => {
    //   if (err) throw err
    //   res.json({token});

    // });

res.json({
  status:true,
  message:"User Registered Successfully",
  data:createNewUser
})


    

    // const CreatedUser = await authModel
    //   .findById(createNewUser._id)
    //   .select('-password');

    // return res.send(CreatedUser);
  } catch (err) {
    console.log(err);
    return res.send(err.message);
  }
};

const login = async (req, res) => {
  const JWTSCERET = "SchoolManagementSystem"
  try {
    const { email, password } = req.body;
    const existingUser = await authModel.findOne({ email });

    // res.send(existingUser.password)

    if (!existingUser) {
      return res.json({
        status: false,
        msg: 'User not found',
      });
    }

    // Password Compare
    const Ismatch = await bcrypt.compare( password, existingUser.password)
    if (!Ismatch) {
      return res.json({
        status:false,
        msg:'Wrong Password'
      })
    } 

    const payload = {
      user:{
        id: existingUser.id
      }
    };

    let authToken = await jwt.sign(payload, JWTSCERET ,{
      expiresIn:3600000
    })
    res.json({
      status:true,
      data:existingUser,
      authToken
    })
    

    

  } catch (err) {
    console.log(err);
    return res.send(err.message);
  }
};






//  async (req, res) => {
//   try {
//     const userid = req.user.id;
//     const user = await authModel.findById(userid).select('-password');
//     res.send(user);
//   } catch (error) {
//     console.log(error.message);
//     res.status(400).json({
//       status: 400,
//       msg: "Server Error"
//     });
//   }
// };
// const getProfile = async (req, res) => {
//   const { token } = req.body;

//   try {
//     const user = jwt.verify(token, 'secret');
//     console.log(user);
//     return res.send(user);
//   } catch (err) {
//     console.log(err);
//     return res.send(err.message);
//   }
// };

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
  // getProfile,
  createCourse
};

export default AuthController;
