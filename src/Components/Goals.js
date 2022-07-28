import React from "react";
import { Col, Row } from "react-bootstrap";
import ImgHomr5 from "./images/imgHome5.jpeg";

export default function () {
  return (
    <div id="goals" className="goalsComponent">
      <Row>
        <Col>
          <img style={{ width: "695px", height: "450px" }} src={ImgHomr5} />
        </Col>
        <Col>
          <div className="goalsContent">
            <h1>نطمح إلى</h1>
            <hr />
            <h5>
              لدينا طموح عالي يعانق السماء بالوصول إلي معظم عناصر المجتمع و
              تحفيزهم على المساهمة بـ :
            </h5>
            <ul>
              <li>تشجير المملكة</li>
              <li>تقليل الانبعاثات الكربونية</li>
              <li>حماية المناطق البرية والبحرية</li>
              <li>المساهمة في الحد من التصحر</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}
