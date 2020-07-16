import fetch from 'node-fetch';
import { Row, Col, Skeleton } from 'antd';

const CovidCorona = ({ data }) => {
  if(!data){
    return(<Skeleton active />)
  }

  return(
    <>
      <h1>Get data covid</h1>
      <Row>
        <Col span={8}>
          <p>Moi nhiem {data.Global.NewConfirmed}</p>
          <p>Tong ca nhiem {data.Global.TotalConfirmed}</p>
        </Col>
        <Col span={8}>
          <p>Moi tu vong {data.Global.NewDeaths}</p>
          <p>Tong ca tu vong {data.Global.TotalDeaths}</p>
        </Col>
        <Col span={8}>
          <p>Khoi benh {data.Global.NewRecovered}</p>
          <p>Tong ca khoi {data.Global.TotalRecovered}</p>
        </Col>
  
    </Row>
    </>
  )
}

export async function getStaticProps(){
  const response = await fetch(`https://api.covid19api.com/summary`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  }
}

export default CovidCorona;