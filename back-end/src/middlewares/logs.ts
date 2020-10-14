import { Request, Response, NextFunction } from 'express';

export default module.exports = {
  logMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log('⏩', req.method, req.url, "- From >>", req.ip);
    next();
  }
}
