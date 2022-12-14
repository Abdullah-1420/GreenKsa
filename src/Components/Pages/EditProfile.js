import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [city,  setCity]  = useState();
  const [phone, setPhone] = useState();
  const [avtar, setAvtar] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    axios
      .get(`https://greenksa-2030.herokuapp.com/accounts/personalInformation`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.Information);
        setData(res.data.Information);
        setFirstName(res.data.Information.first_name);
        setLastName(res.data.Information.last_name);
        setCity(res.data.Information.profile.city);
        setPhone(res.data.Information.profile.phone);
        setAvtar(res.data.Information.profile.avtar);
        setEmail(res.data.Information.email);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  }, []);
  const postData = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://greenksa-2030.herokuapp.com/accounts/updateInformation`,
        {
          first_name,
          last_name,
          city,
          phone,
          avtar,
          email
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res.data.msg);
        navigate(`/profile/${id}`);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.msg);
      });
  };
  return (
    <div>
      <div className="loginRegister">
        <div className="formRegister">
          <Form onSubmit={postData}>
            <h1>?????????? ?????????? ????????????</h1>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="?????????? ??????????" defaultValue={first_name} onChange={(e) => { setFirstName(e.target.value) }}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="?????????? ????????????" defaultValue={last_name} onChange={(e) => { setLastName(e.target.value) }}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Select defaultValue={city} onChange={(e) => { setCity(e.target.value) }}>
              <option value={city}>{city}</option>
              <option value="?????? ??????????????">?????? ??????????????</option>
              <option value="????????????">????????????</option>
              <option value="??????????????">??????????????</option>
              <option value="????????">????????</option>
              <option value="?????????????? ??????????????">?????????????? ??????????????</option>
              <option value="??????????">??????????</option>
              <option value="????????????">????????????</option>
              <option value="????????">????????</option>
              <option value="????????">????????</option>
              <option value="??????????">??????????</option>
              <option value="??????????">??????????</option>
              <option value="????????????">????????????</option>
              <option value="???????????? ????????????????">???????????? ????????????????</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="?????? ????????????" defaultValue={phone} maxLength={'10'} onChange={(e) => { setPhone(e.target.value) }}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="???????? ??????????" defaultValue={avtar} onChange={(e) => { setAvtar(e.target.value) }}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="email" placeholder="??????????????" defaultValue={email} onChange={(e) => { setEmail(e.target.value) }}/>
              </Form.Group>
            </Row>
            <Button id="button" variant="primary" type="submit" size="lg">
              ??????????
            </Button>
            <Button id="button" className='text-warning' type="submit" size="lg" onClick={()=> navigate(`/profile/${id}`)}>
          ??????????
        </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
