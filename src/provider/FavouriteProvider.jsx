import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

export default function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (lat, long, location) => {
    setFavourites([...favourites, { lat, long, location }]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(restFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
