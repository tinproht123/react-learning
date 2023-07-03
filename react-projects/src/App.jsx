import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faChessKnight,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import ChessBoardDrawing from "./pages/chessboard-drawing";
import Calculator from "./pages/calculator";
import "./App.css";
import Logo from "./assets/logo.png";

const { Header, Footer, Sider, Content } = Layout;
library.add(faHome, faChessKnight, faCalculator);

const getItem = (label, key, icon, children, type) => {
  return {
    label,
    key,
    icon,
    children,
    type,
  };
};

const items = [
  getItem(
    <Link to="/">Home</Link>,
    "1",
    <FontAwesomeIcon icon="fa-solid fa-house" />
  ),
  getItem(
    <Link to="/chessboard-drawing">Chessboard</Link>,
    "2",
    <FontAwesomeIcon icon="fa-solid fa-chess-knight" />
  ),
  getItem(
    <Link to="/calculator">Calculator</Link>,
    "3",
    <FontAwesomeIcon icon="fa-solid fa-calculator" />
  ),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ width: "300px" }}
        >
          <Space
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "64px",
            }}
          >
            <img src={Logo} width="50" />
          </Space>
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            theme="dark"
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ backgroundColor: "#fff" }}>Header</Header>

          <Content style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/chessboard-drawing"
                element={<ChessBoardDrawing />}
              />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }} theme="dark">
            @Copyright to Khanh Tung 2023
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
