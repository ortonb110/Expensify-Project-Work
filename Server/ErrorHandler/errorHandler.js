import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, next) => {
    res.status(StatusCodes.BAD_REQUEST).json({msg: err});
}

export default errorHandler;