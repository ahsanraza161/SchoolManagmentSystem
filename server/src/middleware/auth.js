import jwt from 'jsonwebtoken'
// const config = config();
// import dotenv from 'dotenv';
// dotenv.config();




const auth = async (req, res, next) => {

    const JWTSCERET = "SchoolManagementSystem"
    const token = req.header('Authorization'); // Fix the typo here
  
    if (!token) {
      return res.status(401).json({
        status: 401,
        msg: "Authorization denied, Token invalid"
      });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWTSCERET);
      req.user = decoded.user;
      next();
    } catch (error) {
      res.status(401).json({
        status: 401,
        msg: "Invalid token"
      });
    }
  };
  
  export default auth
