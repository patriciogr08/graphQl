import { getObservaciones } from '../services/observacionesTramite';
import { getOrdenes} from '../services/ordernes';

export const resolvers = {
    ordenes : async () => { 
        try {
            const data = await getOrdenes();

            let ordenes = data.results;

            const ordenesConObservaciones = await Promise.all(ordenes.map(async (orden:any) => {
                const observaciones = await getObservaciones(orden.idTramiteTyT);
                    return { ...orden, observaciones };
            }));

            return ordenesConObservaciones;
        } catch (error) {
            throw error;
        }
    },
    mensaje : "Hola Mundo desde el resolver"
};