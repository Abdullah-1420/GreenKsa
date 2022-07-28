import React, { useEffect, useState } from "react";
import "../App2.css";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Tickets() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`https://greenksa-2030.herokuapp.com/coupons/all`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.Coupons);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container style={{ margin: "5%" }}>
        <h1 style={{ textAlign: "center" }}>القسائم</h1>
        <hr style={{ marginBottom: "5%" }} />

        <Row md={"3"} sm={"1"} className="g-4">
          {data.map((e) => (
            <div
              class="card1"
              style={{ backgroundImage: `url("${e?.image}")` }}
            >
              <div class="info">
                <h4 class="title">{e.title}</h4>
                <p style={{ marginRight: "10%" , fontSize:"18px"}}>
                  الوصف: {e.description} <br />
                  الكمية: {e.quantity} <br /> تاريخ القسيمة: {e.start_at?.slice(0, 10)} <br />
                  تاريخ الانتهاء: {e.end_at?.slice(0, 10)}
                  <br />
                 النقاط: {e.points}
                </p>
                {token ? (
                  <Link to={`/Buy/Coupons/${e.id}`}>
                    <Button
                      style={{ marginTop: "-4%" }}
                      id="button"
                      variant="primary"
                      type="submit"
                      size="lg"
                    >
                      شراء
                    </Button>
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}
