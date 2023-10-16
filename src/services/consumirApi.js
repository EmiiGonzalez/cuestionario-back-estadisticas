import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const consumirApi = async (url) => {
    try {
        const response = await axios.get(url);
        return response;
    } catch (axiosError) {
        console.error("Ocurrio un error al consumir la API");
    }
}