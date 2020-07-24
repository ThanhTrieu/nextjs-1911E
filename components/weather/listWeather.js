import { useSelector } from 'react-redux';
import { loadingGetWeather, dataWeatherApi } from '../../redux/reselect/weatherReselect';
import {createStructuredSelector} from 'reselect';
import { Card, Row, Col, Skeleton } from 'antd';
const { Meta } = Card;

export default function ListWeather() {
  const {loading, weather} = useSelector(createStructuredSelector({
    loading: loadingGetWeather,
    weather: dataWeatherApi
  }));
  return (
    <>
      <Row style={{marginTop: 50}}>
        
        {loading ? (<Skeleton active />) : (
          <>
            {weather.map( (item, index) => (
              <Col span={8} key={index}>
                <Card
                  hoverable
                  style={{ width: 200 }}
                  cover={<img alt="example" src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} />}
                >
                  <Meta title={item.dt_txt} />
                  <div className="info__weather">
                    <p>Nhiet do : {item.main.temp}</p>
                    <p>Do am : {item.main.humidity} %</p>
                    <p>Muc nuoc bien: {item.main.sea_level}</p>
                  </div>
                </Card>
              </Col>
            ) )}
          </>
        )}
   
      </Row>
    </>
  )
}