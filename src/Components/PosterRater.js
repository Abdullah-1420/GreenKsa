import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function PosterUser() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const id = localStorage.getItem("id")
  const token = localStorage.getItem("token")
  useEffect(() => {
    axios
      .get(`https://greenksa-2030.herokuapp.com/posts/all`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.Posts);
      })
      .catch((err) => {
        console.log(err);
        navigate('/')
      });
  }, []);
  return (
    <div>
      <Row md={"2"}>
        {data.map( (e) => (<Col>
          <div style={{ textAlign: "center", margin: "10%" }}>
            <div class="b-box">
              <div class="img2-container">
                <div class="img-inner">
                  <div class="inner1-skew">
                    <img src={`${e.image}`} />
                  </div>
                </div>
              </div>
              <div class="text2-container">
                <h2>{e.user.username}</h2>
                <h4>{e.city}</h4>
                <h4>{e.type}</h4>
                <p>{e.description}</p>
               {id==e.user.id? <><Link to={`/editposter/${e.id}`}><Button id="button" variant="primary" type="submit" size="lg">
                  تعديل البوست
                </Button></Link>
                <Link to={`/delete/${e.id}`}><Button id="button" variant="primary" type="submit" size="lg">
                  حذف البوست
                </Button></Link></>:null}
              </div>
            </div>
          </div>
        </Col>))}
      </Row>
    </div>
  );
}
