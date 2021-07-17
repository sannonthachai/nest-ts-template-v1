import {HttpException, HttpStatus} from '@nestjs/common';

export class HttpErrorResponse {
  status: boolean
  serviceCode: string
  errorCode: string
  errorMessage: string
}

export class CustomException extends HttpException {
  constructor(code: string, msg: string, httpStatus: HttpStatus) {
    let httpErrorResponse = new HttpErrorResponse()
    httpErrorResponse.status = false
    httpErrorResponse.serviceCode = '00'
    httpErrorResponse.errorCode = code
    httpErrorResponse.errorMessage = msg
    super(httpErrorResponse, httpStatus);
  }
}
