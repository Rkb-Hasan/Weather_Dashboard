import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    minTemperature: "",
    maxTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    state: true,
    message: "",
  });
  const [error, setError] = useState(null);
  const { selectedLocation } = useContext(LocationContext);
  const fetchWeatherData = async (lat, long) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "fetching weather Data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed ${response.status}
    `;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const updatedWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        minTemperature: data?.main?.temp_max,
        maxTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: long,
        latitude: lat,
      };
      setWeatherData(updatedWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({ ...loading, state: false, message: "" });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "getting Location ...",
    });

    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    weatherData,
    loading,
    error,
  };
};

export default useWeather;
