import { Request, Response, NextFunction } from "express";

interface IError extends Error {
  status?: number;
  meta?: any;
}

export function errorHandler(
  err: IError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err?.meta?.cause);
  const msg = err?.meta?.cause || err?.message || "Something went Wrong!";
  const status = err?.status || 500;
  res.status(status).json({ success: false, msg });
}
