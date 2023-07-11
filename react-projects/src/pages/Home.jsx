import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const apps = [
  {
    name: "Chessboard Drawing",
    link: "/chessboard-drawing",
    icon: <FontAwesomeIcon icon="fa-solid fa-chess-knight" size="3x" />,
    color: "#81b64c",
  },
  {
    name: "Calculator",
    link: "/calculator",
    icon: <FontAwesomeIcon icon="fa-solid fa-calculator" size="3x" />,
    color: "#0d6efd",
  },
  {
    name: "Minesweeper",
    link: "/minesweeper",
    icon: <FontAwesomeIcon icon="fa-solid fa-bomb" size="3x" />,
    color: "#212529",
  },
  {
    name: "Pomodoro",
    link: "/pomodoro",
    icon: <FontAwesomeIcon icon="fa-solid fa-check" size="3x" />,
    color: "rgb(186, 73, 73)",
  },
];

const Home = () => {
  return (
    <div>
      <h1 style={{ letterSpacing: "2px", marginBottom: "20px" }}>Dashboard</h1>
      <hr style={{ marginBottom: "20px" }} />
      <div>
        <h2>Apps</h2>
        <Row
          style={{
            marginTop: "20px",
          }}
          gutter={16}
        >
          {apps.map((item, idx) => (
            <Link key={idx} to={item.link}>
              <Col
                style={{
                  borderRadius: "5px",
                  width: "300px",
                  marginInline: "10px",
                  boxShadow: "0 0 5px 5px rgba(0, 0, 0, 0.1)",
                  padding: "0",
                }}
              >
                <Card
                  hoverable
                  cover={
                    <div
                      style={{
                        height: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: item.color,
                        color: "#fff",
                      }}
                    >
                      {item.icon}
                    </div>
                  }
                >
                  <Meta title={item.name} />
                </Card>
              </Col>
            </Link>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
