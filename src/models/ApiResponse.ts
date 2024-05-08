import { Request, Response, NextFunction } from 'express';

export class ApiResponse {
    statusCode: number;
    error: string;
    data: any;

    constructor(statusCode: number, error: string, data: any) {
        this.statusCode = statusCode;
        this.error = error;
        this.data = data;
    }

    toObject() {
        return {
            statusCode: this.statusCode,
            error: this.error,
            data: this.data,
        };
    }

}