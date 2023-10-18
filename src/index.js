import app from "./app.js";
import dotenv from "dotenv";
import { consumirApi } from "./services/consumirApi.js";
import { tablaFrecuencias } from "./services/tablaFrecuencias.js";
import { getFrecuencias } from "./services/frecuencia.js";
import { saveData } from "./services/saveDatos.js";

dotenv.config({ path: ".env" });
const port = process.env.PORT;
const minutos = Number(process.env.MINUTOS);

const actualizar = async () => {
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

async function main() {
  try {
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
    actualizar();

    setTimeout( () => {
      actualizar();
    } , minutos * 60 * 1000);

  } catch (error) {
    console.error(error.message);
  }
}

main();
