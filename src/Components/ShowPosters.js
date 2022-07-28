import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Collapse, Form, Row } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function ShowPosters() {
  const [open, setOpen] = useState(false);
  const [ data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://greenksa-2030.herokuapp.com/posts/explore`)
      .then((res) => {
        console.log("heeeeer" , res.data.Posts);
        setData(res.data.Posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Row md={"3"} sm={"1"} className="g-4"> 
        {data.map((e)=>( <Col>
          <div className="cardShowPoster" >
            <div className="containerShowPoster">
              <Row>
                <Col>
                  <div className="contentCardShowPoster">
                    <h4 onClick={()=> navigate(`/profile/${e.user.id}`)}>{e.user.username}</h4>
                    <hr />
                    <h5>{e.city}</h5>
                    <hr />
                    <h5>{e.type}</h5>
                    <hr />
                      <b>{e.title}</b>
                    <p>
                      {e.description}
                    </p>
                <b>النقاط : {e.score}</b>
                  </div>
                </Col>
                <Col>
                  <img
                    src={`${e.image}`}
                    alt="Avatar"
                  />
                </Col>
              </Row>
              <Button
                id="button"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                {<BsList />}
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  {/* <p>comment here</p> */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>التعليق</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </div>
              </Collapse>
            </div>
          </div>
        </Col> ))}
      </Row>
    </div>
  );
}
