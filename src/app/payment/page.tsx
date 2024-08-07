"use client";

import React, { useState, useEffect } from "react";
import { useFilters } from "@/contextos/FilterContext";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { format } from "date-fns";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Paper,
  Divider,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { FaCalendarAlt, FaUser, FaUsers, FaTag, FaBed } from "react-icons/fa";
import CardPaymentRoom from "@/componentes/vistas/vistaPayment/CardPaymentRoom";
import { IoSend } from "react-icons/io5";
import { WidthFull } from "@mui/icons-material";

interface Companion {
  name: string;
  identityCard: number;
}

const PaymentView: React.FC = () => {
  const { hotel, arriveDate, departureDate, people, setFilters } = useFilters();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [userId, setUserId] = useState("");
  const [roomId, setRoomId] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [error, setError] = useState("");
  const [bookingSuccessful, setBookingSuccessful] = useState(false);
  const [preferenceId, setPreferenceId] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [discount, setDiscount] = useState<number>(0);
  const [discountMessage, setDiscountMessage] = useState<string | null>(null);
  const [openDiscountSnackbar, setOpenDiscountSnackbar] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("info");

  // Nuevas variables de estado para los datos adicionales de la habitación
  const [roomPrice, setRoomPrice] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomServices, setRoomServices] = useState<string[]>([]);
  const [roomImages, setRoomImages] = useState<string[]>([]);
  const [roomType, setRoomType] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [promotionCode, setpromotionCode] = useState("");

  // Estados para los datos del usuario
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userContry, setUseContry] = useState("");
  const [userPhone, setUsePhone] = useState("");

  useEffect(() => {
    initMercadoPago("APP_USR-50c5501b-9412-483e-874b-6653c0de1f93");
  }, []);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId") || "";
    const storedRoomId = localStorage.getItem("rommUUID") || "";
    const storedCheckInDate = localStorage.getItem("checkInDate") || "";
    const storedCheckOutDate = localStorage.getItem("checkOutDate") || "";
    const storedRoomPrice = localStorage.getItem("roomPrice") || "";
    const storedRoomDescription = localStorage.getItem("roomDescription") || "";
    const storedRoomServices = JSON.parse(
      localStorage.getItem("roomServices") || "[]"
    );
    const storedRoomImages = JSON.parse(
      localStorage.getItem("roomImages") || "[]"
    );
    const storedRoomType = JSON.parse(localStorage.getItem("roomType") || "[]");

    const storedUserData = JSON.parse(localStorage.getItem("userData") || "{}");

    setUserId(storedUserData.id || "");
    // setUserId(storedUserId);
    setRoomId(storedRoomId);
    setCheckInDate(storedCheckInDate);
    setCheckOutDate(storedCheckOutDate);
    setRoomPrice(storedRoomPrice);
    setRoomDescription(storedRoomDescription);
    setRoomServices(storedRoomServices);
    setRoomImages(storedRoomImages);
    setRoomType(storedRoomType);

    setUserName(storedUserData.name || "");
    setUserEmail(storedUserData.email || "");
    setUseContry(storedUserData.country || "");
    setUsePhone(storedUserData.phone || "");
    setIsLoading(false);
  }, []);

  const handleAddCompanion = () => {
    const roomCapacity = getRoomCapacity(roomType);
    if (companions.length >= roomCapacity - 1) {
      setError(
        `No se pueden agregar más acompañantes. Capacidad máxima de ${roomCapacity} personas.`
      );
      return;
    }
    setCompanions([...companions, { name: "", identityCard: 0 }]);
  };

  const handleCompanionChange = (
    index: number,
    field: keyof Companion,
    value: string | number
  ) => {
    const newCompanions = companions.slice();
    newCompanions[index] = { ...newCompanions[index], [field]: value };
    setCompanions(newCompanions);
  };

  const handleRemoveCompanion = (index: number) => {
    const newCompanions = companions.slice();
    newCompanions.splice(index, 1);
    setCompanions(newCompanions);
  };

  const handleSubmit = async () => {
    const bookingData = {
      check_in_date: format(arriveDate!, "yyyy-MM-dd"),
      check_out_date: format(departureDate!, "yyyy-MM-dd"),
      userId,
      roomId,
      companions,
      promotionCode,
    };

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al enviar la reserva.");
      }

      const responseData = await response.json();
      const preferenceId = responseData.order.id;
      setOpenSnackbar(true);

      setPreferenceId(preferenceId);
      setBookingSuccessful(true);
    } catch (error) {
      setError("Error al enviar la reserva.");
      console.error("Error en la solicitud de reserva:", error);
    }
  };

  const handleApplyDiscount = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/promotion/${promotionCode}`
      );
      const data = await response.json();

      if (data.state === "AVAILABLE" && data.available_uses > 0) {
        const discountAmount = (parseFloat(roomPrice) * data.percentage) / 100;
        setDiscount(discountAmount);
      } else {
        setDiscountMessage(
          "El código de descuento no es válido o ya ha sido usado."
        );
        setAlertSeverity("error");
        setOpenDiscountSnackbar(true);
      }
    } catch (error) {
      console.error("Error al aplicar el código de descuento:", error);
    }
  };

  const formatPrice = (price: string | number): string => {
    const priceStr = typeof price === "number" ? price.toString() : price;
    const trimmedPrice = priceStr.includes(".")
      ? priceStr.slice(0, -3)
      : priceStr;
    const numberPrice = parseInt(trimmedPrice, 10);
    return numberPrice.toLocaleString("es-ES");
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenDiscountSnackbar(false);
  };

  const getRoomCapacity = (tipoHabitacion: string): number => {
    switch (tipoHabitacion) {
      case "standar":
        return 2;
      case "double":
        return 2;
      case "deluxe":
        return 3;
      case "suite":
        return 4;
      case "family":
        return 6;
      default:
        return 1;
    }
  };

  const roomCapacity = getRoomCapacity(roomType);
  const canAddMoreCompanions = companions.length < roomCapacity - 1;
  return (
    <Container className="my-24 w-[80%]">
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div className="text-3xl text-gray-600">
            <p>Reservar habitación</p>
            <div className="h-1 w-24 bg-cyan-700 m-1"></div>
          </div>
          <Paper elevation={3} sx={{ mt: 2, mb: 4, p: 4 }}>
            <form>
              <Box mb={4}>
                <Box display="flex" alignItems="center" mb={2}>
                  <FaCalendarAlt size={24} style={{ marginRight: 8 }} className="text-cyan-800" />
                  <Typography variant="h6" className="text-gray-700">
                    Fecha de la Reserva
                  </Typography>
                </Box>
                <div className="flex gap-12 mx-4">
                  <div className="flex flex-col">
                    <Typography className="font-medium text-cyan-900">Fecha de llegada: </Typography>
                    <Typography>{arriveDate?.toDateString()}</Typography>
                  </div>
                  <div className="flex flex-col">
                    <Typography className="font-medium text-cyan-900">Fecha de salida:</Typography>
                    <Typography>{departureDate?.toDateString()}</Typography>
                  </div>
                </div>
              </Box>
              <Box mb={4}>
                <CardPaymentRoom id={roomId} images={roomImages} services={roomServices} type={roomType} />
              </Box>
  
              <div className="flex gap-10">
                <div className="w-1/2">
                  <Box mb={4}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <FaUser size={24} style={{ marginRight: 8 }} className="text-cyan-800" />
                      <Typography variant="h6" className="text-gray-600">
                        Datos del Usuario
                      </Typography>
                    </Box>
                    <div className="flex gap-12 mx-4">
                      <div className="flex flex-col">
                        <Typography className="font-medium text-cyan-900">Nombre: </Typography>
                        <Typography>{userName}</Typography>
                      </div>
                      <div className="flex flex-col">
                        <Typography className="font-medium text-cyan-900">Email:</Typography>
                        <Typography>{userEmail}</Typography>
                      </div>
                    </div>
                  </Box>
                </div>
                <div className="w-1/2">
                  <Box mb={4}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <FaUsers size={24} style={{ marginRight: 8 }} className="text-cyan-800" />
                      <Typography variant="h6" className="text-gray-700">
                        Información de los Acompañantes
                      </Typography>
                    </Box>
                    <Box>
                      {companions.map((companion, index) => (
                        <Box key={index} display="flex" alignItems="center" mb={2}>
                          <TextField
                            label="Nombre del Acompañante"
                            value={companion.name}
                            onChange={(e) => handleCompanionChange(index, "name", e.target.value)}
                            fullWidth
                            margin="normal"
                            style={{ marginRight: 8 }}
                          />
                          <TextField
                            label="Num. identificación"
                            value={companion.identityCard}
                            onChange={(e) => handleCompanionChange(index, "identityCard", e.target.value)}
                            fullWidth
                            margin="normal"
                            type="number"
                            style={{ marginRight: 8 }}
                          />
                          <Button variant="contained" color="secondary" onClick={() => handleRemoveCompanion(index)}>
                            Eliminar
                          </Button>
                        </Box>
                      ))}
                      {canAddMoreCompanions && (
                        <Button variant="contained" color="primary" onClick={handleAddCompanion}>
                          Agregar Acompañante
                        </Button>
                      )}
                      {!canAddMoreCompanions && (
                        <Typography color="error" variant="body1">
                          No se pueden agregar más acompañantes. Capacidad máxima de {roomCapacity} personas.
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </div>
              </div>
            </form>
          </Paper>
          <div className="flex w-[100%] gap-10">
            <div className="w-1/2">
              <Box mb={4}>
                <Box display="flex" alignItems="center" mb={2}>
                  <FaTag size={24} style={{ marginRight: 8 }} className="text-cyan-800" />
                  <Typography variant="h6" className="text-gray-700">
                    Si cuentas con un <strong>código de descuento</strong> colócalo antes de pagar.
                  </Typography>
                </Box>
                <Box className="flex justify-center items-center">
                  <TextField
                    label="Código de Descuento"
                    value={promotionCode}
                    onChange={(e) => setpromotionCode(e.target.value)}
                    sx={{ mr: 2 }}
                  />
                  <Button variant="contained" color="primary" onClick={handleApplyDiscount}>
                    Aplicar
                  </Button>
                </Box>
              </Box>
            </div>
            <div className="w-1/2">
              <p className="w-[100%] bg-gray-200 text-gray-700 text-center text-lg font-normal">
                Resumen de Pago
              </p>
              <Box display="flex" justifyContent="space-between" my={2}>
                <Typography variant="body1">Subtotal</Typography>
                <Typography variant="body1">{formatPrice(roomPrice)}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" my={2}>
                <Typography variant="body1">Descuento</Typography>
                <Typography variant="body1">- {formatPrice(discount)}</Typography>
              </Box>
              <Divider className="w-[100%] text-center" />
              <Box display="flex" justifyContent="space-between" my={2}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" className="text-green-800">
                  {formatPrice(parseFloat(roomPrice) - discount)}
                </Typography>
              </Box>
  
              <Box display="flex" justifyContent="center" mt={4}>
                {bookingSuccessful && preferenceId ? (
                  <div className="w-full flex flex-col items-center gap-4">
                    <Typography variant="h6" className="text-green-500">
                      ¡Reserva realizada con éxito!
                    </Typography>
                    <div className="flex flex-col items-center gap-4">
                      <Typography className="text-gray-700">
                        Proceda con el pago a continuación:
                      </Typography>
                      <Wallet initialization={{ preferenceId }} />
                    </div>
                  </div>
                ) : (
                  <div className="w-[100%]">
                    <Button variant="contained" color="primary" onClick={handleSubmit} className="w-full">
                      Ir a pagar
                    </Button>
                  </div>
                )}
              </Box>
            </div>
          </div>
          {error && (
            <Typography color="error" align="center" mt={2}>
              {error}
            </Typography>
          )}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
              ¡Reserva realizada con éxito!
            </Alert>
          </Snackbar>
          <Snackbar
            open={openDiscountSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert onClose={handleCloseSnackbar} severity={alertSeverity} sx={{ width: "100%" }}>
              {discountMessage}
            </Alert>
          </Snackbar>
        </>
      )}
    </Container>
  );
};
  export default PaymentView;
  