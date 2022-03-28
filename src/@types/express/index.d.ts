declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convertion
  export interface Request {
    user: {
      id: string;
    };
  }
}
