import { useContext } from "react";
import { WeatherContext } from "../../context";
import AddToFavourite from "./AddToFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadline from "./WeatherHeadline";

export default function WeatherBoard() {
  const { loading } = useContext(WeatherContext);

  return (
    <div className="container ">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-4 min-h-[320px] max-w-[958px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          {loading.state ? (
            <p>{loading.message}</p>
          ) : (
            <>
              {" "}
              <AddToFavourite></AddToFavourite>
              <WeatherHeadline></WeatherHeadline>
              <WeatherCondition></WeatherCondition>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
