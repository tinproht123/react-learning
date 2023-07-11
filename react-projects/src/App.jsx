import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Space, FloatButton, Drawer, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faChessKnight,
  faCalculator,
  faBomb,
  faCheck,
  faListCheck,
  faGear,
  faBars,
  faSun,
  faMoon,
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
import Logo from "./assets/logo-main.svg";

//import Config Provider
import { ConfigProvider } from "antd";

//import languages
import zhCN from "antd/locale/zh_CN";

const { Header, Sider, Content } = Layout;
library.add(
  faHome,
  faChessKnight,
  faCalculator,
  faBomb,
  faCheck,
  faListCheck,
  faGear,
  faBars,
  faSun,
  faMoon
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
    "General",
    "gnr",
    null,
    [
      getItem(
        <Link to="/">Home</Link>,
        "1",
        <FontAwesomeIcon icon="fa-solid fa-house" />
      ),
    ],
    "group"
  ),
  getItem(
    "Apps",
    "app",
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
        <FontAwesomeIcon icon="fa-solid fa-check" />
      ),
    ],
    "group"
  ),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState(zhCN);

  return (
    <Router>
      <ConfigProvider locale={zhCN}>
        {/* Settings Menu */}
        <Drawer
          title="Settings"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
          className={theme === "dark" ? "dark" : "light"}
        >
          <Space
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h2>Theme Options</h2>
            <Space style={{ display: "flex", alignItems: "center" }}>
              <Button
                icon={
                  <FontAwesomeIcon
                    icon="fa-solid fa-sun"
                    size="xl"
                    color={theme === "light" ? "#1677ff" : "#fff"}
                  />
                }
                onClick={() => {
                  setTheme("light");
                }}
                size="large"
                style={{ backgroundColor: "transparent !important" }}
                className={`${theme === "dark" && "btn-dark"}`}
              >
                Light
              </Button>
              <Button
                icon={
                  <FontAwesomeIcon
                    icon="fa-solid fa-moon"
                    size="xl"
                    color={theme === "dark" ? "#1677ff" : ""}
                  />
                }
                onClick={() => setTheme("dark")}
                size="large"
                style={{ backgroundColor: "transparent !important" }}
                className={`${theme === "dark" && "btn-dark"}`}
              >
                Dark
              </Button>
            </Space>
          </Space>
        </Drawer>
        {/* Float settings button */}
        <FloatButton
          icon={
            <FontAwesomeIcon
              icon="fa-solid fa-gear"
              style={{ cursor: "pointer" }}
            />
          }
          type="primary"
          style={{ right: 24 }}
          onClick={() => setOpen(true)}
          tooltip={<div>Settings</div>}
        />
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsed={collapsed} style={{ width: "300px" }}>
            <Space
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "64px",
              }}
            >
              <img src={Logo} width="50" style={{ fill: "#000" }} />
            </Space>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["app"]}
              mode="inline"
              theme={theme === "dark" ? "dark" : "light"}
              items={items}
              style={{ height: "100%" }}
            />
          </Sider>
          <Layout>
            <Header className={`header ${theme === "light" && "light"}`}>
              <FontAwesomeIcon
                icon="fa-solid fa-bars"
                size="xl"
                style={{ transition: "0.5 all ease", cursor: "pointer" }}
                rotation={collapsed ? 0 : 90}
                onClick={() => setCollapsed((prev) => !prev)}
              />
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
          </Layout>
        </Layout>
      </ConfigProvider>
    </Router>
  );
}

export default App;
