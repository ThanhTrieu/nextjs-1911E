import { Row, Col } from 'antd';
import Head from 'next/head';

export default function WeatherLayout({
  children,
  title="app weather"
}) {
  return(
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row style={{marginTop: 10}}>
        <Col span={12} offset={6}>
          {children}
        </Col>
      </Row>
      <Row style={{marginTop: 50}}>
        <Col span={12} offset={6}>
          <footer> Demo app weather 2020</footer>
        </Col>
      </Row>
    </>
  )
}