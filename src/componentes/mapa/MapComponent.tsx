"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IconType } from "react-icons";
import { IoLocationSharp } from "react-icons/io5";
import L from "leaflet";
import ReactDOMServer from 'react-dom/server';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import LocationPopup from "./LocationPopup";

interface Location {
  longitude: number;
  latitude: number;
  name: string;
  type: string;
  imageUrl: string;
  address: string;
}

const data: Location[] = [
  { longitude: -81.7004, latitude: 12.5776, name: "Aqua Maris Hotels", type: "hotel", imageUrl:"https://i.pinimg.com/736x/ca/9d/4f/ca9d4f9d865a1e1659242c31d55685e9.jpg", address: "Carrera 1 #2-3" },
  { longitude: -81.7188, latitude: 12.5168, name: "Restaurante Donde Francesca", type: "restaurant", imageUrl:"https://i.pinimg.com/564x/9d/64/fe/9d64fe0a023da6bf904e21a3127b6a84.jpg", address: "Avenida Colombia #4-5" },
  { longitude: -81.7005, latitude: 12.5790, name: "Restaurante La Regatta", type: "restaurant", imageUrl:"https://i.pinimg.com/564x/da/6b/95/da6b95e247f061b1bf9400ec79f6341c.jpg", address: "Calle 1 #6-7" },
  { longitude: -81.7042, latitude: 12.5744, name: "Restaurante Capitan Mandy", type: "restaurant", imageUrl:"https://i.pinimg.com/564x/50/fd/b9/50fdb9a0f5a0f6b1bec22507d3962253.jpg", address: "Calle 2 #8-9" },
  { longitude: -81.7019, latitude: 12.5821, name: "Restaurante The Grog", type: "restaurant", imageUrl:"https://i.pinimg.com/564x/69/82/1f/69821f0d9cc7aec27b731e32ef70be11.jpg", address: "Carrera 3 #10-11" },
  { longitude: -81.7008, latitude: 12.5739, name: "Restaurante La Pizzetta Florio", type: "restaurant", imageUrl:"https://i.pinimg.com/564x/1c/5d/2a/1c5d2a4e355588229354561a9b863f0f.jpg", address: "Avenida Costa Rica #12-13" },
  { longitude: -81.7023, latitude: 12.5769, name: "Academia de Buceo", type: "experience", imageUrl:"https://i.pinimg.com/564x/2c/c7/10/2cc7104b8a680aeb4350605c2f6223a5.jpg", address: "Calle 4 #14-15" },
  { longitude: -81.7034, latitude: 12.5775, name: "Alquiler de Kayak", type: "experience", imageUrl:"https://i.pinimg.com/564x/66/02/90/6602905391766ff31be7ef51f2717dcf.jpg", address: "Carrera 5 #16-17" },
  { longitude: -81.7045, latitude: 12.5780, name: "Alquiler de Catamarán", type: "experience", imageUrl:"https://i.pinimg.com/736x/aa/1b/5c/aa1b5c62b891f2c0e6bb9ab252a3351e.jpg", address: "Avenida Colombia #18-19" },
];

// Define custom icon component
const CustomIcon = ({ color }: { color: string }) => {
  return (
    <div style={{ color: color, fontSize: '35px', transform: 'translate(-50%, -100%)' }}>
      <IoLocationSharp className=""/>
    </div>
  );
};

const MapComponent: React.FC = () => {
  return (
    <MapContainer
      center={[12.5739, -81.7008]}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((location, index) => (
        <Marker 
          key={index} 
          position={[location.latitude, location.longitude]}
          icon={L.divIcon({
            className: 'custom-icon',
            html: ReactDOMServer.renderToString(
              <CustomIcon color={
                location.type === "hotel" ? "#991b1b" : 
                location.type === "restaurant" ? "#07282C" : 
                "#3AC6C7"
              } />
            )
          })}
        >
          <Popup>
            <LocationPopup name={location.name} imageUrl={location.imageUrl} address={location.address}/>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
