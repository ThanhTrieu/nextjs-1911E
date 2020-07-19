import { Card, Row, Col } from 'antd';
const { Meta } = Card;

export default function ListWeather() {
  return (
    <>
      <Row style={{marginTop: 50}}>
        <Col>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </>
  )
}