"use client";

import React from 'react';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useRooms } from '@/contextos/RoomContext';
import CardHabitacion from './CardHabitacion';
import ErrorMessage from '../reusables/texts/ErrorMessage';


const ListaHabitaciones: React.FC = () => {
  const { rooms } = useRooms();

  return (
    <Container className='flex justify-center items-center relative'>
      {rooms.length === 0 ? (
        <ErrorMessage/>
      ) : (
        <List className='w-[100%] flex flex-col justify-center items-center'>
          {rooms.map((room, index) => (
            <ListItem key={index}>
              <CardHabitacion habitacion={room}></CardHabitacion>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default ListaHabitaciones;
