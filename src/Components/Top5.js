import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Img from "./images/imgHome1.jpg";
import "../App2.css";
import axios from "axios";

export default function Top5() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://greenksa-2030.herokuapp.com/posts/top5")
    .then((res) => {
      console.log("HELLOOOOOOOOOO",res.data['Users Profile'])
      setData(res.data['Users Profile'])
    })
    .catch(err => console.log("WTF",err));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>افضل من زرع</h1>
      <hr />
      <div className="container_two">
        {data.map((e) =>  <div class="col-md-4">
          <div class="profile-card-4 text-center">
            <img
              src={e.avtar?`${e.avtar}`:"https://viewgital.com/img/chat/default-user-image.jpg"}
              class="img img-responsive"
            />
            <div class="profile-content">
              <h3>{`${e.user.first_name} ${e.user.last_name}`}</h3>
              <div class="profile-description">
                <Row>
                  <Col>المركز</Col>
                  <Col>{e.city}</Col>
                </Row>
              </div>
              <div class="row">
                <div class="col-xs-4">
                  <div class="profile-overview">
                    <h3>النقاط</h3>
                    <h4>{e.scorePoints}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
}
