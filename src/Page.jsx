import { useContext, useEffect, useState } from "react";
import fewClouds from "./assets/backgrounds/few-clouds.jpg";
import mistImage from "./assets/backgrounds/mist.jpeg";
import rainyImage from "./assets/backgrounds/rainy-day.jpg";
import scatteredCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import snowImage from "./assets/backgrounds/snow.jpg";
import sunnyImage from "./assets/backgrounds/sunny.jpg";
import thunderstormImage from "./assets/backgrounds/thunderstorm.jpg";
import winterImage from "./assets/backgrounds/winter.jpg";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");
  const getBackgrounImage = (climate) => {
    switch (climate) {
      case "Rain":
        return rainyImage;
      case "Clouds":
        return scatteredCloudsImage;
      case "Snow":
        return snowImage;
      case "Thunder":
        return thunderstormImage;
      case "Fog":
        return winterImage;
      case "Haze":
        return fewClouds;
      case "Mist":
        return mistImage;
      case "Clear":
        return sunnyImage;
    }
  };

  useEffect(() => {
    const bgImage = getBackgrounImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className="min-h-screen flex items-center justify-center">
          <p className="bg-gray-300 rounded-md p-3 text-center text-xl text-black animate-pulse">
            {loading.message}
          </p>
        </div>
      ) : (
        <>
          <div
            style={{ backgroundImage: `url('${climateImage}')` }}
            className="grid place-items-center h-screen bg-no-repeat bg-cover"
          >
            <Header></Header>
            <main>
              <section>
                <WeatherBoard></WeatherBoard>
              </section>
            </main>
          </div>
        </>
      )}
    </>
  );
}
