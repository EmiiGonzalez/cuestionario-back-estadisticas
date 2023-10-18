import app from "./app.js";
import dotenv from "dotenv";
import {actualizar} from "./services/actualizar.js";
const minutos = Number(process.env.MINUTOS);
dotenv.config({ path: ".env" });
const port = process.env.PORT;


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
