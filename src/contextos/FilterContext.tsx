"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextType {
  filters: any;
  setFilters: (filters: any) => void;
  hotel: string;
  setHotel: (hotel: string) => void;
  arriveDate: Date | null;
  setArriveDate: (date: Date | null) => void;
  departureDate: Date | null;
  setDepartureDate: (date: Date | null) => void;
  people: number;
  setPeople: (people: number) => void;
  resetFilters: () => void;
  sort: string;
  setSort: (sort: string) => void;
  page: number;
  setPage: (page: number) => void;

  totalPage: number;
  setTotalPage: (page: number) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const initialFilters = {
  types: {
    standard: false,
    double: false,
    deluxe: false,
    suite: false,
    family: false,
  },
  services: {
    wifi: false,
    television: false,
    seaView: false,
    airConditioning: false,
    heater: false,
    safeBox: false,
    parking: false,
    fridge: false,
    breakfast: false,
    jacuzzi: false,
  },
};

const getDefaultDepartureDate = (arriveDate: Date) => {
  const departureDate = new Date(arriveDate);
  departureDate.setDate(departureDate.getDate() + 2);
  return departureDate;
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<any>(initialFilters);
  const [hotel, setHotel] = useState<string>("");
  const [arriveDate, setArriveDate] = useState<Date | null>(new Date());
  const [departureDate, setDepartureDate] = useState<Date | null>(
    getDefaultDepartureDate(new Date())
  );
  const [people, setPeople] = useState<number>(1);
  const [sort, setSort] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(5);


  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        hotel,
        setHotel,
        arriveDate,
        setArriveDate,
        departureDate,
        setDepartureDate,
        people,
        setPeople,
        resetFilters,
        sort,
        setSort,
        page,
        setPage,
        totalPage,
        setTotalPage
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
