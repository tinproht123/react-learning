/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import { Space, Row, Col, Divider, Rate, Tag } from "antd";
import UserAvatar from "../../assets/asuka.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div
      style={{
        color: "#333 !important",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
      }}
    >
      <h1 style={{ marginBottom: "30px", fontSize: "30px" }}>Profile</h1>
      <Row style={{ display: "flex", justifyContent: "space-between" }}>
        <Col
          span={5}
          style={{
            padding: "8px",
          }}
        >
          <img src={UserAvatar} style={{ width: "100%" }} alt="avatar" />
          <div style={{ marginBottom: "40px" }}>
            <Divider
              orientation="left"
              orientationMargin="0"
              style={{ borderBlockColor: "#ccc" }}
            >
              <p
                style={{
                  color: "#999",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "18px",
                }}
              >
                Education
              </p>
            </Divider>
            <div style={{ marginBottom: "20px" }}>
              <p
                style={{ fontSize: "16px", color: "#666", fontWeight: "bold" }}
              >
                08/2020 - 06/2023
              </p>
              <h5
                style={{
                  fontSize: "17px",
                  color: "#444",
                  fontWeight: "bold",
                  margin: "5px 0",
                }}
              >
                HNIVC
              </h5>
              <Tag color="#1677ff" style={{ fontSize: "16px" }}>
                Application Software Developer
              </Tag>
              <ul
                style={{
                  fontSize: "16px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                <li>Computer Science</li>
                <li>Build a Managment System on ASP.NET MVC</li>
                <li>Web Dev and Web Design</li>
              </ul>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <p
                style={{ fontSize: "16px", color: "#666", fontWeight: "bold" }}
              >
                09/2022 - 12/2022
              </p>
              <h5
                style={{
                  fontSize: "17px",
                  color: "#444",
                  fontWeight: "bold",
                  margin: "5px 0",
                }}
              >
                PTIT
              </h5>
              <Tag color="#1677ff" style={{ fontSize: "16px" }}>
                Web Developer
              </Tag>
              <ul
                style={{
                  fontSize: "16px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                <li>Build a RESTFUL API with Spring Boot and MySql</li>
                <li>Build a complete E-Commerce Website</li>
                <li>Web Dev and Web Design</li>
              </ul>
            </div>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <Divider
              orientation="left"
              orientationMargin="0"
              style={{ borderBlockColor: "#ccc" }}
            >
              <p
                style={{
                  color: "#999",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "18px",
                }}
              >
                Works
              </p>
            </Divider>
            <div style={{ marginBottom: "20px" }}>
              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  fontWeight: "bold",
                }}
              >
                12/2023 - 05/2023
              </p>
              <h5
                style={{
                  fontSize: "17px",
                  color: "#444",
                  fontWeight: "bold",
                  margin: "5px 0",
                }}
              >
                SIMAX
              </h5>
              <Tag color="#cd201f" style={{ fontSize: "16px" }}>
                Intern
              </Tag>
              <ul
                style={{
                  fontSize: "16px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                <li>Design UI/UX for company's website</li>
                <li>Develop a Managment System on ASP.NET MVC</li>
                <li>Company's application testing</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col span={18}>
          <Space>
            <h2
              style={{
                fontSize: "28px",
                letterSpacing: "1px",
                color: "#555",
                marginBottom: "10px",
              }}
            >
              Nguyễn Gia Khánh Tùng
            </h2>
            <Space style={{ color: "#999" }}>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <p>Hanoi, Vietnam</p>
            </Space>
          </Space>
          <h3
            style={{
              color: "#2196f3",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            Web Developer
          </h3>
          <div style={{ marginTop: "40px" }}>
            <Divider
              orientation="left"
              orientationMargin="0"
              style={{ borderBlockColor: "#ccc" }}
            >
              <p
                style={{
                  color: "#999",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "18px",
                }}
              >
                Rankings
              </p>
            </Divider>
            <Space style={{ display: "flex", alignItems: "center" }}>
              <p style={{ fontSize: "24px", fontWeight: "bold" }}>8.6</p>
              <Rate
                allowHalf
                disabled
                defaultValue={4.5}
                style={{ color: "#2196f3" }}
              />
            </Space>
          </div>
          <div style={{ marginTop: "40px" }}>
            <Divider
              orientation="left"
              orientationMargin="0"
              style={{ borderBlockColor: "#ccc" }}
            >
              <p
                style={{
                  color: "#999",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  fontSize: "18px",
                }}
              >
                About Me
              </p>
            </Divider>
            <div>
              <div style={{ marginBottom: "30px" }}>
                <h4
                  style={{
                    color: "#555",
                    marginBottom: "20px",
                    fontSize: "16px",
                    letterSpacing: "2px",
                  }}
                >
                  CONTACT INFORMATION
                </h4>
                <Row style={{ marginBottom: "10px" }}>
                  <Col span={4}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Phone:
                    </p>
                  </Col>
                  <Col span={20}>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#2196f3",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      +84 0924 808 757
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                  <Col span={4}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Address:
                    </p>
                  </Col>
                  <Col span={20}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      18 Linh Nam, Vinh Hung, Hoang Mai, Hanoi, Vietnam
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                  <Col span={4}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Email
                    </p>
                  </Col>
                  <Col span={20}>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "#2196f3",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      <a href="mailto:tinproht123@gmail.com?subject=Example%20Subject&amp;body=Example%20Body">
                        tinproht123@gmail.com
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                  <Col span={4}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Site
                    </p>
                  </Col>
                  <Col span={20}>
                    <p
                      style={{
                        color: "#2196f3",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      <a
                        href="https://khanh-tung-portfolio-v1-1.w3spaces.com/"
                        target="_blank"
                      >
                        https://khanh-tung-portfolio-v1-1.w3spaces.com/
                      </a>
                    </p>
                  </Col>
                </Row>
              </div>
              <div style={{ marginBottom: "30px" }}>
                <h4
                  style={{
                    color: "#555",
                    marginBottom: "20px",
                    fontSize: "16px",
                    letterSpacing: "2px",
                  }}
                >
                  BASIC INFORMATION
                </h4>
                <Row style={{ marginBottom: "10px" }}>
                  <Col span={4}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Birthday:
                    </p>
                  </Col>
                  <Col span={20}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      January 30, 2002
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                  <Col span={4}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Gender:
                    </p>
                  </Col>
                  <Col span={20}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Male
                    </p>
                  </Col>
                </Row>
              </div>
              <div style={{ marginBottom: "30px" }}>
                <h4
                  style={{
                    color: "#555",
                    marginBottom: "20px",
                    fontSize: "16px",
                    letterSpacing: "2px",
                  }}
                >
                  SKILLS
                </h4>
                <Row style={{ marginBottom: "10px" }}>
                  <Col span={4}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Programing Languages:
                    </p>
                  </Col>
                  <Col span={20}>
                    <ul
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                        listStyleType: "none",
                      }}
                    >
                      <li>- Java</li>
                      <li>- C#</li>
                      <li>- Javascript/Typescript</li>
                      <li>- Python</li>
                    </ul>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                  <Col span={4}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Web Design:
                    </p>
                  </Col>
                  <Col span={20}>
                    <ul
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                        listStyleType: "none",
                      }}
                    >
                      <li>- Sass</li>
                      <li>- ReactJs</li>
                      <li>- Redux, React Router</li>
                      <li>- Material UI, Ant-Design</li>
                    </ul>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                  <Col span={4}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Back-end:
                    </p>
                  </Col>
                  <Col span={20}>
                    <ul
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                        listStyleType: "none",
                      }}
                    >
                      <li>- RESTFUL API Design</li>
                      <li>- Database Design</li>
                      <li>- MS Sql Server, MySql</li>
                      <li>- Spring Boot, Django, NodeJs/ExpressJs</li>
                      <li>- Spring Security, JWT, OAuth2</li>
                    </ul>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                  <Col span={4}>
                    <p
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                      }}
                    >
                      Soft Skills:
                    </p>
                  </Col>
                  <Col span={20}>
                    <ul
                      style={{
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        fontSize: "16px",
                        listStyleType: "none",
                      }}
                    >
                      <li>- English (Intermediate)</li>
                      <li>- Git</li>
                      <li>- Figma</li>
                      <li>- Hosting</li>
                      <li>- Data Structure & Algorithms</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;
