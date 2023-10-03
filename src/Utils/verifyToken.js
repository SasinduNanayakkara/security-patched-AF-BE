import Jwt from "jsonwebtoken";

export const verifyToken = (req,res,next) => {
    const token = req.header("authToken");
    if(!token) {
        return res.status(401).send({message: "Access Denied"});
    }

    try {
        const verified = Jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }
    catch(err) {
        return res.status(401).send({message: "Access denied"});
    }
}

