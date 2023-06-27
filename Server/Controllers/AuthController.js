import {StatusCodes} from 'http-status-codes'



const register = (req, res) => {
    res.status(StatusCodes.OK).json({msg: "Register"});
}
const login = (req, res) => {
    res.status(StatusCodes.OK).json({msg: "Login"});
}


export {register, login};


