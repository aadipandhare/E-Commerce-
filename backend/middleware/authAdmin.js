import jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config();

const authAdmin = (req, res, next) =>{
    try {
        const authHeader = req.headers.authorization;
        const headerToken = req.headers.token;
        const token = authHeader?.startsWith("Bearer ")
            ? authHeader.split(" ")[1]
            : authHeader || headerToken;
        
        
        if(!token || token === "null" || token === "undefined"){
            return res.json({success: false, message: "Not Authorized Login again"})
        }
        
        //token decoding
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(process.env.JWT_SECRET)


        // if(token !== process.env.ADMIN_LOGIN + process.env.ADMIN_PASSWORD){
        //     return res.json({success:false, message:"Not Authorized Login again"})
        // }

        if(decoded.role !== "admin"){
             return res.json({success:false, message:"Not Authorized Login again"});
        }

        req.adminId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
        
    }
}


export default authAdmin;
