import mongoose from "mongoose";

const tablaSchema = new mongoose.Schema({
  fecha: String,
  total: Number,
  sexo: Object,
  edad: Object,
  p1: Object,
  p2: Object,
  p3: Object,
  p4: Object,
  p5: Object,
  p6: Object,
  p7: Object,
  p8: Object,
  p9: Object,
  p10: Object,
  p11_1: Object,
  p11_2: Object,
  p12: Object,
  p13: Object,
  p14: Object,
  p15: Object,
  p16: Object,
},
{
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    },
  },
});

export const tablaDatos = mongoose.model("estadisticas", tablaSchema);
