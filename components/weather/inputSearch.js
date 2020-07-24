import useTranslation from 'next-translate/useTranslation';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { getDataWeatherFromApi } from '../../redux/actions/weather';
const { Search } = Input;

export default function InputSearch() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const getDataWeather = (city) => {
    dispatch(getDataWeatherFromApi(city));
  }

  return(
    <>
      <h1>{t('common:title')}</h1>
      <Search 
        placeholder="input search text"
        onSearch={value => getDataWeather(value)} 
        enterButton
      />
    </>
  )
}