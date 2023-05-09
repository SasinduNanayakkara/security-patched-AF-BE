import { loginService } from "../Services/Login.service";
import { sendTokenResponse } from "../Utils/jwt";

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await loginService({email, password});
        sendTokenResponse(res, user, "Login successful");
    }
    catch (error) {
        res.status(500).json({message: error.message,});
    }
}