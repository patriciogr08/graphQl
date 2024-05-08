import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../models/ApiResponse';

export class ErrorHandlerService {
    handleErrors(app: any) {
        app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
            console.log(err)
            if (err.name === 'ValidationError') {
                const apiResponse = new ApiResponse(422, err.message, null);
                res.status(apiResponse.statusCode).json(apiResponse.toObject());
            }
            if (err.name === 'AuthenticationError') {
                const apiResponse = new ApiResponse(403, err.message, null);
                res.status(apiResponse.statusCode).json(apiResponse.toObject());
            }else{
                const apiResponse = new ApiResponse(500, err.message, null);
                res.status(apiResponse.statusCode).json(apiResponse.toObject());
            }

        });
    }
}