import { useContext } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

export default function Page() {
  const { loading } = useContext(WeatherContext);

  return (
    <>
      {loading.state ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <>
          <div className="grid place-items-center h-screen">
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
