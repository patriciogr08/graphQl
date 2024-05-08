import dotenv from 'dotenv';

dotenv.config();

export const urlServices: string = process.env.URL_SERVICES!;
export const token: string = process.env.TOKEN!;
