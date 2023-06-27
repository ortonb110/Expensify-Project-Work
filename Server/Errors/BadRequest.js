import CustomErrorApi from "./CustomErrorApi.js";
import { StatusCodes } from "http-status-codes";
export default class BadRequestError extends CustomErrorApi {
    constructor(message) {
      super(message);
      this.statusCode = StatusCodes.BAD_REQUEST;
    }
  }