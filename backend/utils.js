// 이거 어떻게 해야되는건지 확인해야 한다.
// 4시 45분
import jwt from 'jsonwebtoken';

export const generateToken = (user)=>{
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET || 'somethingsecret',
        {
            expiresIn: '30d',
        }
    );
};