import express from 'express';

function logger(
 req: express.Request,
 res: express.Response,
 next: Function
): void {
 const name = req.query.filename as string;
 console.log(`${name} is being accessed`);
 console.log(res.statusCode);
 next();
}
export default logger;
