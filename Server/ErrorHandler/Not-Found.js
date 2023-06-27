import { StatusCodes } from "http-status-codes"
const notFound = (req, res) => {
    res.status(StatusCodes.NOT_FOUND).send("Request not found!");
}

export default notFound;