import moment from "moment/moment.js";
import dotenv from "dotenv";
import { tablaDatos } from '../models/Estadisticas.js'

dotenv.config({ path: ".env" });

export const saveData = async (data) => {
    const fechaHoraActual  = moment()
    const fechaHora = fechaHoraActual.parseZone(process.env.DATE_ZONE);
    const fecha = fechaHora.format(process.env.DATE_FORMAT);
    console.log(fecha);

    try {
        data.fecha = fecha;
        await tablaDatos.create(data);
    } catch (error) {
        console.log("Ocurrio un error al guardar la base de datos");
    }

    
}