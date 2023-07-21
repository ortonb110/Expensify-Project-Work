import { StatusCodes } from "http-status-codes";
import CustomErrorApi from './CustomErrorApi.js'


export default class Unauthenticated extends CustomErrorApi {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.Unauthenticated;
    }
}