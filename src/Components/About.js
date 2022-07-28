import React from "react";
import ImgHomr1 from "./images/imgHome2.jpeg";
import { Col, Row } from "react-bootstrap";



export default function About() {
  return (
    <div className="aboutComponent">
      <Row>
        <Col>
        <div className="aboutContent">
          <h1 id="about">من نحن</h1>
          <hr />
          <p>
            المملكة الخضراء منصة تدعم مبادرة مملكتنا الحبيبة الرياض الخضراء بحيث تكون
            هذه المبادرة على المملكة كافتًا، و أيضًا تساهم في تحفيز جميع فئات المجتع على أن تكون لهم البصمة والدور الفعال في المساعة في تحقيق هذه المبادرة و رؤية المملكة 2030. 
          </p>
        </div>
        </Col>
        <Col>
          <img style={{width:"740px" , height:"450px"}} src={ImgHomr1} />
        </Col>
      </Row>
    </div>
  );
}