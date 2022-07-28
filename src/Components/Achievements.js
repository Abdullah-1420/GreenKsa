import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgHome6 from "./images/imgHome6.jpg";
import imgHome7 from "./images/imgHome7.png";
import imgHome8 from "./images/imgHome8.jpg";

export default function () {
  return (
    <div id="achievement" style={{ textAlign: "center", margin: "10%" }}>
      <h1>المملكة الخضراء بالأرقام</h1>
      <hr />
      <Row md={"3"} sm={"1"} className="g-4">
        <Col>
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src={imgHome6} />
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>عدد المساهمين</h3>
              <h2>144</h2>
            </div>
          </div>
        </Col>
        <Col>
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src={imgHome8} />
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>عدد الزرعات</h3>
              <h2>288</h2>
            </div>
          </div>
        </Col>
        <Col>
          <div class="a-box">
            <div class="img-container">
              <div class="img-inner">
                <div class="inner-skew">
                  <img src={imgHome7} />
                </div>
              </div>
            </div>
            <div class="text-container">
              <h3>عدد المناطق</h3>
              <h2>11</h2>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
