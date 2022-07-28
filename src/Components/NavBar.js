import React, { useEffect, useState } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Col,
  Row,
  Button,
  Offcanvas,
  Container,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./images/Logo.png";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("https://greenksa-2030.herokuapp.com/accounts/personalInformation", {
        headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      console.log(res.data)
      setData(res.data.Information)
      localStorage.setItem("id", res.data.Information.id)
      localStorage.setItem("groups",res.data.Information.groups[0])
    })
    .catch(err => console.log(err));
  }, []);
  const postData = (e) => {
    e.preventDefault();
    axios
      .post(`https://greenksa-2030.herokuapp.com/accounts/login`, {
        username,
        password,
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201 || res.status === 202) {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
    const Logout = () => {
      localStorage.removeItem("token")
      navigate('/')
      handleClose()
      window.location.reload()
    }
    const goToProfile = () => {
      navigate(`/profile/${data.id}`)
      handleClose()
    }


  return (
    <div>
      <div>
        <div>
          <Navbar
            className="px-3  Navbar sticky-top"
            variant="light"
            expand="lg"
          >
            <img
              src={Logo}
              style={{ height: "70px", width: "85px", borderRadius: "50%" }}
            />
            <Navbar.Brand href="/">المملكة الخضراء</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <Nav.Link href="/">الرئسية</Nav.Link>
                <Nav.Link href="/posters">بصمات</Nav.Link>
                <Nav.Link href="/ticket">القسائم</Nav.Link>
                <Nav.Link href="/explorer">استكشف#</Nav.Link>
                <NavDropdown title="أذهب إلى" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/#about">نبذه عنا</NavDropdown.Item>
                  <NavDropdown.Item href="/#goals">الأهداف</NavDropdown.Item>
                  <NavDropdown.Item href="/#achievement">
                    الانجازات
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/#footer">
                    تواصل معنا
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <div>
                <Button id="button" variant="primary" onClick={handleShow}>
                  <FaUserCircle />
                  {token ? <h4>{data.first_name}</h4> : null}
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header
                    style={{ color: "white", background: "#2b472ecf" }}
                    closeButton
                  >
                    <Offcanvas.Title>
                      {token ? <h1>{data.username}</h1> : null}
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="text-center mt-5">
                    {token ? (
                      <>
                        <h3>
                          الاسم: {`${data.first_name} ${data.last_name}`}{" "}
                        </h3>
                        <h3>الايميل: {data.email}</h3>
                        <h3>الجوال: {data?.profile?.phone}</h3>
                        <h3>المنطقة: {data.first_name}</h3>
                        <hr />
                        <h2>Score points: {data?.profile?.scorePoints}</h2>
                        <hr />
                      </>
                    ) : (
                      <div className="formLogin">
                        <Form style={{ padding: "1rem" }} onSubmit={postData}>
                          <h3>تسجيل الدخول</h3>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                              <Form.Control
                                type="text"
                                placeholder="اسم المستخدم"
                                onChange={(e) => {
                                  setUsername(e.target.value);
                                }}
                              />
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                              <Form.Control
                                type="password"
                                placeholder="كلمة المرور"
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                              />
                            </Form.Group>
                          </Row>

                          <Button
                            id="button"
                            variant="primary"
                            onClick={postData}
                          >
                            دخول
                          </Button>
                          <Link to="/register">
                            <Button
                              id="button"
                              variant="primary"
                              type="submit"
                              onClick={handleClose}
                            >
                              سجل معنا
                            </Button>
                          </Link>
                        </Form>
                      </div>
                    )}
                    <br />
                    {token ? (
                      <>
                        <Button
                          id="button-danger"
                          variant="primary"
                          onClick={Logout}
                        >
                          الخروج
                        </Button>

                        <Button
                          id="button"
                          variant="primary"
                          onClick={goToProfile}
                        >
                          معلومات الحساب
                        </Button>
                      </>
                    ) : null}
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="wrapper">
          <ul>
            <li className="whatsapp">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
              <div className="slider">
                <a
                  href="https://wa.me/+966500303116"
                  target="_blank"
                  className="linkTag"
                >
                  <p>whatsapp</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" className="top">
            &#8593;
          </a>
        </div>
      </div>
    </div>
  );
}
