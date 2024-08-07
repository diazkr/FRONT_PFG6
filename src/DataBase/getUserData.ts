// getUserDataMock.ts

export const getUserData = () => {
  return {
    id: "231e2a09-5a45-459f-ad20-f619d9d544b8",
    name: "Jane Smith",
    email: "janesmith@example.com",
    role: "USER",
    phone: "215165181",
    country: "456 Elm St",
    user_photo: "jane_smith_photo.jpg",
    membership_status: "ACTIVE",
    status: true,
    date_start: "2024-07-05T06:41:36.303Z",
    date_end: "",
    booking: [
      {
        id: "c20bee74-0726-485a-940d-e366b9c2e1f6",
        check_in_date: "2024-08-09",
        check_out_date: "2024-08-14",
        paymentStatus: "IN_PROGRESS",
        user: {
          id: "231e2a09-5a45-459f-ad20-f619d9d544b8",
          name: "Jane Smith",
          email: "janesmith@example.com",
          password: "password2",
          role: "USER",
          phone: "215165181",
          country: "456 Elm St",
          user_photo: "jane_smith_photo.jpg",
          membership_status: "ACTIVE",
          status: true,
          date_start: "2024-07-05T06:41:36.303Z",
          date_end: "",
        },
        room: {
          id: "a2dea71c-5904-48b0-a4b9-3014f7452e9a",
          type: "standard",
          price: "170000.00",
          description: "Habitación Estandar con comodidades básicas",
          state: "available",
          roomNumber: 7,
          services: ["wifi"],
          images: [
            "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
            "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
            "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
          ],
        },
      },
      {
        id: "737f470e-e804-4943-a037-f9832e5bf420",
        check_in_date: "2024-08-09",
        check_out_date: "2024-08-14",
        paymentStatus: "IN_PROGRESS",
        user: {
          id: "231e2a09-5a45-459f-ad20-f619d9d544b8",
          name: "Jane Smith",
          email: "janesmith@example.com",
          password: "password2",
          role: "USER",
          phone: "215165181",
          country: "456 Elm St",
          user_photo: "jane_smith_photo.jpg",
          membership_status: "ACTIVE",
          status: true,
          date_start: "2024-07-05T06:41:36.303Z",
          date_end: "",
        },
        room: {
          id: "141e6ecb-93c3-4346-a460-e71c761bee8a",
          type: "standard",
          price: "190000.00",
          description: "Habitación Estandar con comodidades básicas",
          state: "available",
          roomNumber: 10,
          services: ["wifi"],
          images: [
            "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
            "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
            "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
          ],
        },
      },
      {
        id: "bdf7d09d-ba68-40fa-bef4-cc9cc654f93f",
        check_in_date: "2024-05-09",
        check_out_date: "2024-05-14",
        paymentStatus: "IN_PROGRESS",
        user: {
          id: "231e2a09-5a45-459f-ad20-f619d9d544b8",
          name: "Jane Smith",
          email: "janesmith@example.com",
          password: "password2",
          role: "USER",
          phone: "215165181",
          country: "456 Elm St",
          user_photo: "jane_smith_photo.jpg",
          membership_status: "ACTIVE",
          status: true,
          date_start: "2024-07-05T06:41:36.303Z",
          date_end: "",
        },
        room: {
          id: "0ed8ace3-44c1-4b0f-9b3f-35f7dad1cd9a",
          type: "double",
          price: "300000.00",
          description: "Habitación doble con capacidad para dos personas",
          state: "available",
          roomNumber: 22,
          services: ["wifi"],
          images: [
            "https://i.pinimg.com/564x/14/40/87/144087b48437019a1330a5c919faf582.jpg",
            "https://i.pinimg.com/564x/c4/2c/1a/c42c1a943fbde7703cdac240b9b19681.jpg",
            "https://i.pinimg.com/564x/54/13/4b/54134b8ca1bf13cdb8eb35008621d250.jpg",
          ],
        },
      },
    ],
    comments: [
      {
        id: "de43acb5-2966-4e4e-9407-b3a713ef07fe",
        comment:
          "La habitación 8 fue excelente, muy limpia y con una vista espectacular.",
        rating: 5,
        comment_date: "2024-07-02",
        comment_status: "APPROVED",
      },
      {
        id: "f0284f90-da5d-493f-95c3-158ef8710443",
        comment:
          "La habitación 30 es fantástica, pero el personal de limpieza fue un poco ruidoso en la mañana.",
        rating: 4,
        comment_date: "2024-07-02",
        comment_status: "APPROVED",
      },
    ],
  };
};
