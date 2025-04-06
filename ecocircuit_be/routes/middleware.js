import  jwt, { decode }  from "jsonwebtoken";

const JWT_SEC = process.env.JWT_SEC;
export function authCheck(req,res,next){
    try{

    const header= req.headers['authorization'];
    console.log(header)
    const decoded = jwt.verify(header, JWT_SEC)
    console.log(decoded.user)

    if(decoded)
    {
        
        req.user = decoded.user;
        next()
    }
    else{
        res.json({
            message:"You are not logged in"
        })
    }
}
catch(error){
    res.json({
            message:"Invalid Token"
        })
}
}