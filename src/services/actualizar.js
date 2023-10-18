import { consumirApi } from "./consumirApi.js";
import { tablaFrecuencias } from "./tablaFrecuencias.js";
import { getFrecuencias } from "./frecuencia.js";
import { saveData } from "./saveDatos.js";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const minutos = Number(process.env.MINUTOS);

export const actualizar = async () => {
    try {
      const url = process.env.URL;
      const resp = await consumirApi(url)
      const datos = getFrecuencias(resp);
      const frecuencias = tablaFrecuencias(datos);
      await saveData(frecuencias);
      console.log("Se actualizo la base de datos");
    } catch (error) {
      console.log(`Ocurrio un error al actualizar la base de datos, se reintentara en ${minutos} minutos`);
    } 
  };