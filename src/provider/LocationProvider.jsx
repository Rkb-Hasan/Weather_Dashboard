import { useState } from "react";
import { LocationContext } from "../context";

export default function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    longitude: 0,
    latitude: 0,
  });

  return (
    <LocationContext.Provider value={{ setSelectedLocation, selectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
