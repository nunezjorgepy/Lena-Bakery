import medialena from "../assets/medialena.png";
import panintegral from "../assets/panIntegral.png";
import bizcochitos from "../assets/bizcochitos.png";
import cuadraditos from "../assets/cuadraditos.png";
import lemonFit from "../assets/lemonFit.png";
import pastaFrola from "../assets/pastaFrola.png";
import tiramisu from "../assets/tiramisu.png";

const products = [
    {
        id: 1,
        name: "Medialena's",
        image: medialena,
        price: 500,
        description: "INTEGRALES. SIN MANTECA Y SIN AZÚCAR AGREGADA",
        ingredients: "harina integral, harina de avena, manzana, pasta de maní, huevos, leche descremada, dátiles stevia.",
        quantity: 0,
    },
    {
        id: 2,
        name: "Pan 100% Integral",
        image: panintegral,
        price: 3500,
        description: "Pan de molde con Semillas Tostadas",
        ingredients: `harina integral, levadura, aceite de oliva, semillas, sal. 
        Ideal para tud tostadas con palta o huevo`,
        quantity: 0,
    },
    {
        id: 3,
        name: "Bizcochitos",
        image: bizcochitos,
        price: 1000,
        description: "INTEGRALES Y SIN MANTECA :)",
        ingredients: "harina integral, papa, boniato, garbanzos, aceite de oliva, sal, pimentón, queso parmesano.",
        quantity: 0,
    },
    {
        id: 4,
        name: "Cuadraditos",
        image: cuadraditos,
        price: 1000,
        description: "Cuadraditos de coco o dulce de leche",
        ingredients: "harina integral, harina de avena, coco rallado, dulce de leche sin azúcar, dátiles, stevia, huevos, vainilla, nueces.",
        quantity: 0,
    },
    {
        id: 5,
        name: "Tiramisú",
        image: tiramisu,
        price: 2500,
        description: "SIN MANTECA NI SIN AZÚCAR AGREGADA",
        ingredients: "Queso crema light, yogur natural, huevos, harina de avena, vainilla, leche en polvo, cacao amargo, stevia, café.",
        quantity: 0,
    },
    {
        id: 6,
        name: "Lemon Fit",
        image: lemonFit,
        price: 3000,
        description: "Lemon Pie fit hiper proteico",
        ingredients: "Huevos, yogur natural, jugo de li,ón, queso crema light, coco rallado, harina de avena, semillas de sesamo, stevia.",
        quantity: 0,
    },
    {
        id: 7,
        name: "Pasta Frola",
        image: pastaFrola,
        price: 4000,
        description: "Pastafrola integral sin azúcar",
        ingredients: "No esta dentro de las historías, pero ya lo voy a atener.",
        quantity: 0,
    },
];


export default products;