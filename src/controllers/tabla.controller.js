import { tablaDatos } from '../models/Estadisticas.js'

export const getDatos = async (req, res) => {
    try {
        const datos = await tablaDatos.find()
        res.json(datos)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

export const getLastUpdate = async (req, res) => {
    try {
        const dato = await tablaDatos.findOne().sort({ fecha: -1 });
        res.json(dato);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
}