import React from "react";
import {
  Navbar,
  Cryptocurrencies,
  CryptoDetails,
  Homepage,
  Exchanges,
  News,
} from "./components";
import { Layout, Typography, Space } from "antd";
import { NavLink, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route
                exact
                path="/"
                element={<Homepage />}
              />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route
                exact
                path="/exchanges"
                element={<Exchanges />}
              />
              <Route
                exact
                path="/crypto/:coinId"
                element={<CryptoDetails />}
              />
              <Route
                exact
                path="/news"
                element={<News />}
              />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoWorld <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/exchanges">Exchanges</NavLink>
            <NavLink to="/news">News</NavLink>
          </Space>
        </div>
      </div>
    </div>
  );
}
