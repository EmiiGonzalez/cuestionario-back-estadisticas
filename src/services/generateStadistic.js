export const filtrarDatos = (data) => {
  const arrayDatos = [];
    const ignore = [
      "sexo",
      "p3",
      "p11",
      "edad",
      "p17_o",
      "p4_o",
      "p5_o",
      "p6_o",
      "p7_o",
      "p11_o",
      "p12_o",
      "p14_o",
    ];
    data.data.forEach((element) => {
      const datos = {};
      datos.id = element.cuestn;
      for (const camp in element) {
        if (!ignore.includes(camp)) {
          let value = element[camp];
          if (value.length == 1) {
            datos[camp] = value;
          }
          if (value.length > 1) {
            const arrayData = value.split("");
            arrayData.forEach((i) => {
              datos[`${camp}_${i}`] = 1;
            })
          }
        }
        if (camp == "edad" || camp == "sexo" || camp == "p3") {
          datos[camp] = element[camp];
        }
        if( camp == "p11"){
          const value = element[camp];
          const arrayData = value.split("");
          datos[camp + "_1"] = arrayData[0];
          datos[camp + "_2"] = arrayData[1];
        }

      }
      arrayDatos.push(datos);
    });
  
    return arrayDatos;
  };
  