import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Space, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faChessKnight,
  faCalculator,
  faBomb,
  faCircleCheck,
  faListCheck,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

//import pages and projects
import Home from "./pages/Home";
import ChessBoardDrawing from "./pages/chessboard-drawing";
import Calculator from "./pages/calculator";
import MineSweeper from "./pages/minesweeper";
import Pomodoro from "./pages/pomodoro";

//import css
import "./index.css";

//import logo
import Logo from "./assets/logo.png";

const { Header, Footer, Sider, Content } = Layout;
library.add(
  faHome,
  faChessKnight,
  faCalculator,
  faBomb,
  faCircleCheck,
  faListCheck,
  faGear
);

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
    "Projects",
    "prj",
    <FontAwesomeIcon icon="fa-solid fa-list-check" />,
    [
      getItem(
        <Link to="/chessboard-drawing">Chessboard</Link>,
        "2",
        <FontAwesomeIcon icon="fa-solid fa-chess-knight fa-2xs" />
      ),
      getItem(
        <Link to="/calculator">Calculator</Link>,
        "3",
        <FontAwesomeIcon icon="fa-solid fa-calculator" />
      ),
      getItem(
        <Link to="/minesweeper">Minesweeper</Link>,
        "4",
        <FontAwesomeIcon icon="fa-solid fa-bomb" />
      ),
      getItem(
        <Link to="/pomodoro">Pomodoro</Link>,
        "5",
        <FontAwesomeIcon icon="fa-solid fa-circle-check" />
      ),
    ]
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
            defaultOpenKeys={["prj"]}
            mode="inline"
            theme="dark"
            items={items}
          />
        </Sider>
        <Layout>
          <Header className="header">
            <Dropdown>
              <FontAwesomeIcon
                icon="fa-solid fa-gear"
                size="xl"
                style={{ cursor: "pointer" }}
              />
            </Dropdown>
          </Header>

          <Content style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/chessboard-drawing"
                element={<ChessBoardDrawing />}
              />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/minesweeper" element={<MineSweeper />} />
              <Route path="/pomodoro" element={<Pomodoro />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            @Copyright to Khanh Tung 2023
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
