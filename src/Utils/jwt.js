import jwt from 'jsonwebtoken';

export const sendTokenResponse = async (res, user, message) => {
    const accessToken = await generateToken(user);

    res.status(200).json({
        data: {user, access_token: accessToken},
        message,
    });
}

export const generateToken = async (user) => {
    return jwt.sign({data: user}, process.env.JWT_SECRET, {expiresIn: `${process.env.JWT_EXPIRE}d`})
}

export const verifyToken = async (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}