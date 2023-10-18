import app from "./app.js";
import dotenv from "dotenv";
import { consumirApi } from "./services/consumirApi.js";
import { tablaFrecuencias } from "./services/tablaFrecuencias.js";
import { getFrecuencias } from "./services/frecuencia.js";
import { saveData } from "./services/saveDatos.js";

dotenv.config({ path: ".env" });
const port = process.env.PORT;

const actualizar = async () => {
  try {
    const url = process.env.URL;
    const minutos = Number(process.env.MINUTOS);

    const resp = await consumirApi(url)
    const datos = getFrecuencias(resp);
    const frecuencias = tablaFrecuencias(datos);
    saveData(frecuencias);

    setTimeout( () => {
      actualizar();
      console.log("Se actualizo la base de datos");
    } , minutos * 60 * 1000);
  
  } catch (error) {
    console.log("Ocurrio un error al actualizar la base de datos, se reintentara en 30 minutos");
    console.log(error);
  } 
};

async function main() {
  try {
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
    actualizar();
  } catch (error) {
    console.error(error.message);
  }
}

main();
