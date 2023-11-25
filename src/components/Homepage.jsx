import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row, Statistic, Typography } from "antd";
import millify from "millify";


import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

function Homepage() {
  const {data: cryptos, isFetching} = useGetCryptosQuery(100);
  const globalStats = cryptos?.data?.stats;

  return (
    <>
      <Typography.Title
        level={2}
        className="heading"
      >
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Crypto Currencies"
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={globalStats?.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={globalStats?.totalMarkets}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Typography.Title>
        <Typography.Title level={3} className="show-more"><NavLink to="/cryptocurrencies">Show More</NavLink></Typography.Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
        <Typography.Title level={3} className="show-more"><NavLink to="/cryptocurrencies">Show More</NavLink></Typography.Title>
      </div>
      <News />
    </>
  );
}

export default Homepage;
