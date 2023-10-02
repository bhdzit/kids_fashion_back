import { Global, HttpStatus } from '@nestjs/common';

@Global()
export class ApiException extends Error {
  constructor(message: string) {
    super(message);
  }

  public getStatus(): HttpStatus {
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
