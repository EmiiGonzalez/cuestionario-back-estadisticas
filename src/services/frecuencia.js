import { validarValue, valMultiple } from "../services/validarValues.js";

export const getFrecuencias = (datos) => {
  const frecuencias = {
    total: 0,
    sexo: [],
    "edad_14-25": [],
    "edad_26-40": [],
    "edad_41-55": [],
    "edad_56-99": [],
    p1: [],
    p2: [],
    p3: [],
    p4: [],
    p5: [],
    p6: [],
    p7: [],
    p8: [],
    p9: [],
    p10: [],
    p11_1: [],
    p11_2: [],
    p12: [],
    p13: [],
    p14: [],
    p15: [],
    p16: [],
  };
  const ignore = [
    "cuestn",
    "p3",
    "p11",
    "edad",
    "p17",
    "p17_o",
    "p4_o",
    "p5_o",
    "p6_o",
    "p7_o",
    "p11_o",
    "p12_o",
    "p14_o",
  ];

  datos.data.forEach((dato) => {
    for (const campo in dato) {
      const value = dato[campo];
      //para todos los campos excepto los del array ignore
      if (!ignore.includes(campo) && dato[campo] != undefined) {
        //respuestas unicas
        if (value.length == 1 && validarValue(value, campo)) {
          frecuencias[campo].push(value);
        }
        //respuestas multiples
        if (value.length > 1) {
          const arrayData = value.split("");
          if (valMultiple(arrayData, campo)) {
            frecuencias[campo].push(...arrayData);
          }
        }
      }

      
      //para la edad
      if (campo == "edad" ) {
        //la edad no es necesario validarla
        const valorEntero = Number(value);
        if (valorEntero >= 14 && valorEntero <= 25) {
          frecuencias["edad_14-25"].push(value);
        }
        if (valorEntero >= 26 && valorEntero <= 40) {
          frecuencias["edad_26-40"].push(value);
        }
        if (valorEntero >= 41 && valorEntero <= 55) {
          frecuencias["edad_41-55"].push(value);
        }
        if (valorEntero >= 56 && valorEntero <= 99) {
          frecuencias["edad_56-99"].push(value);
        }
         
      }


      // para el valor de escala de 1 a 10 o p3
       if (campo == "p3") {
        if (validarValue(value, campo)) {
          frecuencias[campo].push(value);
        }
       }


      //para la p11 que es la primer y segunda red social mas usada
      if (campo == "p11" && value.length > 1) {
        const arrayData = value.split("");
        if (valMultiple(arrayData, campo)) {
          frecuencias.p11_1.push(arrayData[0]);
          frecuencias.p11_2.push(arrayData[1]);
        }
      }
    }
    frecuencias.total++;
  });
  return frecuencias;
};
