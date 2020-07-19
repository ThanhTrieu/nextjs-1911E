import axios from 'axios';

const getDataWeather = async(city) => {
  const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=073f342f34bacc8898356a523fa5b4f8&units=metric&lang=vi`);
  const result = await response.status === 200 ? await response.data.list : [];
  return result;
}

export const api = {
  getDataWeather
}