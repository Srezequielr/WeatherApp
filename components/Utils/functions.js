const APIKEY = process.env.NEXT_PUBLIC_APIKEY;

export const searchCity = async (value) => {
    console.log(value);
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKEY}&units=metric`
  ).then((response) => response.json());
  console.log(data);
};
