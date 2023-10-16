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

  // Calcular la frecuencia porcentual y el total de datos
  const totalDeDatos = array.length;
  const frecuenciaPorcentual = {};

  for (const key in frecuenciaAbsoluta) {
    const fAbsoluta = frecuenciaAbsoluta[key];
    const fPorcentual = (fAbsoluta / totalDeDatos) * 100;
    frecuenciaPorcentual[`fPorcentual_${key}`] = fPorcentual;
  }

  // Construir el objeto de resultados
  const resultado = {
    dato: nombreDato,
    totalDeDatos,
    ...frecuenciaAbsoluta,
    ...frecuenciaPorcentual,
  };

  return resultado;
};
