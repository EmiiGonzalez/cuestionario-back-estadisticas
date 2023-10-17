import { connectDB } from "../database/db.js";

const tablaDatos = connectDB.model(
    "estadisticas",
    {
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
        p16: Object
    }
)