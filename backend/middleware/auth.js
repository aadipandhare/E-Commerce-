import jwt from 'jsonwebtoken'

const authUser = async (req,res) =>{
    const {token} = req.header

    if(!token){
        return res.json({success: false, message: 'Not authorized'})
    }


    try{
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id
        next();

    }catch(error){
        console.log(error);
        res.josn({success: false, message: error.message})
    }
}

export default authUser;