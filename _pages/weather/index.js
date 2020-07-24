import WeatherLayout from '../../components/weather-layout';
import InputSearchWeather from '../../components/weather/inputSearch';
import ListWeather from '../../components/weather/listWeather';
import SwitchLanguage from '../../components/weather/switchLanguae';

export default function Index(){
  return(
    <>
      <WeatherLayout>
        <InputSearchWeather/>
        <SwitchLanguage/>
        <ListWeather/>
      </WeatherLayout>
    </>
  )
}