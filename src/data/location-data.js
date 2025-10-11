const data = [
  {
    location: "New York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: "London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: "Dubai",
    latitude: 25.2048,
    longitude: 55.2708,
  },
  {
    location: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    location: "Cairo",
    latitude: 30.033,
    longitude: 31.233,
  },
  {
    location: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    location: "Moscow",
    latitude: 55.7558,
    longitude: 37.6173,
  },
  {
    location: "Mexico",
    latitude: 19.4326,
    longitude: -99.1332,
  },
  {
    location: "Beijing",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    location: "Toronto",
    latitude: 43.6532,
    longitude: -79.3832,
  },
  {
    location: "Cape Town",
    latitude: -33.9249,
    longitude: 18.4241,
  },
  {
    location: "Berlin",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: "Seoul",
    latitude: 37.5665,
    longitude: 126.978,
  },
  {
    location: "Dhaka",
    latitude: 23.82626875,
    longitude: 90.3454725,
  },
];

function getLocations() {
  return data;
}
function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      longitude: 0,
      latitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
