import { Statistic, Typography, Row, Col } from 'antd';
import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;
  if (isFetching) return 'loading...';

  return (
    <>
    <Title level={2} className='heading'>Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title='Total Cryptocurrentcies' value={globalStats.total}/></Col>
      <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title='Total markets' value={millify(globalStats.totalMarkets)}/></Col>
    </Row>
    <div className='home-heading-container'>
      <title level={2} className='home-title' >Top 10 Cryptocurrencies in the world</title>
      <title level={3} className='show-more' ><Link to='/cryptocurrencies'>Show More</Link></title>

    </div>
    </>
  )
}

export default Homepage