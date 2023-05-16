import { Statistic, Typography, Row, Col } from 'antd';
import React from 'react';
//import millify from 'millify';
//import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery ();
  console.log(data); 
  return (
    <>
    <Title level={2} className='heading'>Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title='Total Cryptocurrentcies' value='5'/></Col>
      <Col span={12}><Statistic title='Total Exchanges' value='5'/></Col>
      <Col span={12}><Statistic title='Total Market Cap' value='5'/></Col>
      <Col span={12}><Statistic title='Total 24h Volume' value='5'/></Col>
      <Col span={12}><Statistic title='Total markets' value='5'/></Col>
    </Row>
    </>
  )
}

export default Homepage