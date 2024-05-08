import axios from 'axios';
import { token, urlServices } from './datosServicios';

export async function getObservaciones(idTramite :string) {
    try {
        const response = await axios.get(`${urlServices}/bdservitorres/observacionestyt/${idTramite}`, {
            headers: {
            Authorization: `Bearer ${token} `
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}