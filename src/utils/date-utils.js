const getFormattedDate = (val, type, inMs) => {
  if (!type) return val;
  if (!inMs) {
    val = val * 1000;
  }
  const date = new Date(val);

  let options;

  if (type === "date") {
    options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  } else if (type === "time") {
    options = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", options).format(date);
};

export default getFormattedDate;
