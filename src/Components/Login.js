import React from 'react'
import { Form, Col, Button, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postData = () => {
    axios
      .post(`https://greenksa-2030.herokuapp.com/accounts/login`,{
        username,
        password
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201 || res.status === 202) {
          console.log(res);
          localStorage.setItem("token", res)
          navigate('/')
        }
      })
      .catch((err)=> {
        console.log(err);
      })
      }
  return (
    <div className='loginRegister'>
      <div className="formLogin">
        <Form onSubmit={postData}>
          <h1>تسجيل الدخول</h1>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="text" placeholder="اسم المستخدم" onChange={(e) => {
              setUsername(e.target.value)}} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="password" placeholder="كلمة المرور" onChange={(e) => {
              setPassword(e.target.value);
            }} />
            </Form.Group>
          </Row>

      
            <Button id="button2" variant="primary" type="submit" size="lg">
              دخول
            </Button>

            <Button id="button3" variant="primary" type="submit" size="lg">
              سجل معنا
            </Button>
          
        </Form>
      </div>
    </div>
  );
}
