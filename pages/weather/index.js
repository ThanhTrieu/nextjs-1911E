import WeatherLayout from '../../components/weather-layout';
import InputSearchWeather from '../../components/weather/inputSearch';
import ListWeather from '../../components/weather/listWeather';

export default function Index(){
  return(
    <>
      <WeatherLayout>
        <InputSearchWeather/>
        <ListWeather/>
      </WeatherLayout>
    </>
  )
}