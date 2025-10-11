import { useContext, useState } from "react";
import seachLogo from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
export default function Search() {
  const [searchTerm, setSearcTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchedLocation = getLocationByName(searchTerm);
    console.log(fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          onChange={(e) => setSearcTerm(e.target.value)}
          value={searchTerm}
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={seachLogo} />
        </button>
      </div>
    </form>
  );
}
