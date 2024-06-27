import { Habitacion } from "@/interfaces/HabitacionInterface";

export const getMockRooms = (): Habitacion[] => {
  return [
    {
      id_habitacion: "3f50c0d0-4e80-4c9e-bb6d-2f7180ff6dfb",
      tipo_habitacion: "estandar",
      precio: 100,
      descripcion:
        "Habitacion estandar con vista al mar. Disfruta de la comodidad de esta habitación con todos los servicios básicos, perfecta para una estancia corta y relajante.",
      estado: "disponible",
      imagenes: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      numero_habitacion: 101,
      servicios: ["Wi-Fi", "Television", "Vista al mar", "Aire acondicionado"],
    },
    {
      id_habitacion: "2a14f5a5-3b98-4e8b-9cf7-2e86a8763e14",
      tipo_habitacion: "suite",
      precio: 200,
      descripcion:
        "Suite de lujo con balcon privado y vistas impresionantes. Ideal para aquellos que buscan una experiencia de alta gama con comodidades exclusivas.",
      estado: "disponible",
      imagenes: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      numero_habitacion: 102,
      servicios: [
        "Wi-Fi",
        "Television",
        "Vista al mar",
        "Aire acondicionado",
        "Jacuzzi",
      ],
    },
    {
      id_habitacion: "7f3b9f5d-8f5a-4f6a-9f1e-85f8e8b2c1f1",
      tipo_habitacion: "doble",
      precio: 150,
      descripcion:
        "Habitacion doble con dos camas confortables y todas las facilidades necesarias para una estancia agradable. Perfecta para amigos o compañeros de viaje.",
      estado: "disponible",
      imagenes: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      numero_habitacion: 103,
      servicios: ["Wi-Fi", "Television", "Aire acondicionado", "Calefaccion"],
    },
    {
      id_habitacion: "9c63b5c9-4a58-4e8b-8d1e-73f8b6b5c1c8",
      tipo_habitacion: "deluxe",
      precio: 250,
      descripcion:
        "Habitacion deluxe con jacuzzi y vista panoramica. Esta espaciosa habitación ofrece lujo y confort con instalaciones modernas para una estancia memorable.",
      estado: "disponible",
      imagenes: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      numero_habitacion: 104,
      servicios: [
        "Wi-Fi",
        "Television",
        "Vista al mar",
        "Aire acondicionado",
        "Jacuzzi",
        "Caja fuerte",
      ],
    },
    {
      id_habitacion: "5b34d0c4-3f80-4a7b-9e8e-5f4f8d8e2c4c",
      tipo_habitacion: "familiar",
      precio: 300,
      descripcion:
        "Habitacion familiar con varias camas y amplios espacios. Ideal para familias grandes, ofrece todas las comodidades necesarias para una estancia confortable y divertida.",
      estado: "ocupada",
      imagenes: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      numero_habitacion: 105,
      servicios: [
        "Wi-Fi",
        "Television",
        "Aire acondicionado",
        "Calefaccion",
        "Desayuno",
        "Nevera",
        "Estacionamiento",
      ],
    },
    {
      id_habitacion: "af2f0cba-2f9b-4d0c-8a8e-6e8a8f8f8c8b",
      tipo_habitacion: "estandar",
      precio: 100,
      descripcion:
        "Habitacion estandar con decoracion moderna y vista a la ciudad. Una opción asequible y cómoda para viajeros de negocios o turismo.",
      estado: "disponible",
      imagenes: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      numero_habitacion: 106,
      servicios: ["Wi-Fi", "Television", "Aire acondicionado"],
    },
    {
      id_habitacion: "b8d8f8e8-5d8e-4e8e-8f8e-8f8e8f8e8f8e",
      tipo_habitacion: "doble",
      precio: 150,
      descripcion:
        "Habitacion doble con camas queen y balcon privado. Perfecta para parejas que buscan una escapada romántica con todas las comodidades.",
      estado: "disponible",
      imagenes: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      numero_habitacion: 107,
      servicios: [
        "Wi-Fi",
        "Television",
        "Aire acondicionado",
        "Calefaccion",
        "Caja fuerte",
      ],
    },
    {
      id_habitacion: "c9f9f9f9-9f9f-4f9f-9f9f-9f9f9f9f9f9f",
      tipo_habitacion: "suite",
      precio: 200,
      descripcion:
        "Suite con sala de estar separada y cocina completa. Ideal para estancias largas o para aquellos que buscan un hogar lejos de casa.",
      estado: "disponible",
      imagenes: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      numero_habitacion: 108,
      servicios: [
        "Wi-Fi",
        "Television",
        "Vista al mar",
        "Aire acondicionado",
        "Jacuzzi",
        "Nevera",
      ],
    },
    {
      id_habitacion: "d0e0e0e0-0e0e-4e0e-0e0e-0e0e0e0e0e0e",
      tipo_habitacion: "deluxe",
      precio: 250,
      descripcion:
        "Habitacion deluxe con terraza privada y servicio de mayordomo. Disfruta del lujo y la exclusividad con atención personalizada y vistas impresionantes.",
      estado: "disponible",
      imagenes: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      numero_habitacion: 109,
      servicios: [
        "Wi-Fi",
        "Television",
        "Vista al mar",
        "Aire acondicionado",
        "Jacuzzi",
        "Caja fuerte",
        "Estacionamiento",
      ],
    },
    {
      id_habitacion: "e1f1f1f1-1f1f-4f1f-1f1f-1f1f1f1f1f1f",
      tipo_habitacion: "familiar",
      precio: 305,
      descripcion:
        "Habitacion familiar con area de juegos y cocina completa. Perfecta para familias que buscan comodidad y diversión, con todas las facilidades necesarias.",
      estado: "disponible",
      imagenes: [
        "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
        "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
        "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
      ],
      numero_habitacion: 110,
      servicios: [
        "Wi-Fi",
        "Television",
        "Aire acondicionado",
        "Calefaccion",
        "Desayuno",
        "Nevera",
        "Estacionamiento",
        "Caja fuerte",
      ],
    },
  ];
};
