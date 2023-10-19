export const validarValue = (value, idPregunta) => {
  if (isNaN(Number(value))) {
    return false;
  }
  if (value == undefined) {
    return false;
  }
  if (value === null) {
    return false;
  }
  if (valores[idPregunta].includes(Number(value))) {
    return true;
  } 
};

export const valMultiple = (values, idPregunta) => {
  let control = true;
  values.forEach((valor) => {
    if (!validarValue(valor, idPregunta)) {
      control = false;
      return control;
    }
  });
  return control;
};

const valores = {
  sexo: [1, 2],
  p1: [1, 2],
  p2: [1, 2, 3],
  p3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  p4: [1, 2, 3],
  p5: [1, 2, 3, 4],
  p6: [1, 2, 3, 4, 5],
  p7: [1, 2, 3, 4],
  p8: [1, 2, 3],
  p9: [1, 2, 3],
  p10: [1, 2, 3, 4, 5, 6, 7, 8],
  p11: [1, 2, 3, 4, 5],
  p12: [1, 2, 3, 4, 5, 6],
  p13: [1, 2, 3, 4, 5],
  p14: [1, 2, 3, 4],
  p15: [1, 2, 3, 4],
  p16: [1, 2, 3],
  p17: [1, 2],
};
