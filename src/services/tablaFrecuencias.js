import { preguntas } from "./preguntas.js";
export const tablaFrecuencias = (datos) => {
  const frecuencias = {};
  frecuencias.total = datos.total;

  for (const dato in datos) {
    if (dato != "total") {
      frecuencias[dato] = calcularEstadisticas(datos[dato], dato);
    }
  }

  return frecuencias;
};

const calcularEstadisticas = (array, nombreDato) => {
  // Contar la frecuencia absoluta de cada valor en el array
  const frecuenciaAbsoluta = array.reduce((result, value) => {
    if (!result[value]) {
      result[value] = 0;
    }
    result[value]++;
    return result;
  }, {});

  //objeto final a retornar
  const resultado = {};
  const totalDeDatos = array.length;
  const frecuenciaPorcentual = [];
  const datos = [];
  const labels = [];

  for (const key in frecuenciaAbsoluta) {
    if (nombreDato != "edad") {
      const fAbsoluta = frecuenciaAbsoluta[key];
      const respuesta = preguntas[nombreDato][key];
      const fPorcentual = Math.round((fAbsoluta / totalDeDatos) * 100);
      datos.push(fAbsoluta);
      labels.push(respuesta);
      frecuenciaPorcentual.push(fPorcentual);

      resultado.pregunta = nombreDato;
      resultado.totalDeDatos = totalDeDatos;
      resultado.fAbsoluta = datos;
      resultado.labels = labels;
      resultado.fPorcentual = frecuenciaPorcentual;
    }
    if (nombreDato == "edad") {
      const fAbsoluta = frecuenciaAbsoluta[key];
      const fPorcentual = Math.round((fAbsoluta / totalDeDatos) * 100);

      datos.push(fAbsoluta);
      labels.push(key);
      frecuenciaPorcentual.push(fPorcentual);

      resultado.pregunta = nombreDato;
      resultado.totalDeDatos = totalDeDatos;
      resultado.fAbsoluta = datos;
      resultado.labels = labels;
      resultado.fPorcentual = frecuenciaPorcentual;
    }
  }

  return resultado;
};
