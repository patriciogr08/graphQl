import axios from 'axios';
import { token, urlServices } from './datosServicios';

export async function getOrdenes() {
    try {
        const response = await axios.get(`${urlServices}/seguimientos/listarseguimientos/?page=1&orden=2024&items=10&user=fmartillo&inHouse=&cliente=&supervisor= `, {
            headers: {
            Authorization: `Bearer ${token} `
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}