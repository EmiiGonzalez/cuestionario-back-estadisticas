import { Respuestas } from "../models/respuestas.js";
import { sequelize } from "../database/db.js";

export const saveData = async (data) => {
    try {
        
        const insertarValores = data.map(async (registro) => {
            const  id  = registro.id;
            const registroExistente = await Respuestas.findOne({ where: { id } });
            if (registroExistente) {
                await Respuestas.update(registro, { where: { id } });
              } else {
                await Respuestas.create(registro);
              }
        })

        await Promise.all(insertarValores);
    } catch (error) {
        console.error(error);
    }
}