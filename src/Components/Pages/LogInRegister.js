import axios from 'axios';
import React, { useState } from 'react'
import { Form, Col, Button, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


export default function LogInRegister() {
  const [username,      setUsername] = useState('')
  const [password,      setPassword] = useState('')
  const [validPassword, setValidPassword] = useState('')
  const [firstName,     setFirstName] = useState('')
  const [lastName,      setLastName] = useState('')
  const [email,         setEmail] = useState('')
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault()
    if (password === validPassword){
    axios.post(`https://greenksa-2030.herokuapp.com/accounts/register`,{
      'first_name':firstName,
      'last_name':lastName,
      username,
      email,
      password
    }).then((res) => {
      console.log(res.data)
      alert(res.data.msg)
      setUsername(null)
      setPassword(null)
      setValidPassword(null)
      setFirstName(null)
      setLastName(null)
      setEmail(null)
      navigate('/')
    }).catch((err)=>{
      console.log(err)
      alert(err.response.data.msg)
    })
  }else {
    setPassword(null)
    setValidPassword(null)
    alert("كلمة المرور وتاكيد كلمة المرور غير متطابقة")}}
    return (
    <div>
      <div className="loginRegister">
        <div className="formRegister">
          <Form onSubmit={register}>
            <h1>بادر بالتسجيل وضع بصمتك في التشجير</h1>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="الاسم الأول" onChange={(e) => { setFirstName(e.target.value) }}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="الاسم الأخير" onChange={(e) => { setLastName(e.target.value) }}/>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="اسم المستخدم" onChange={(e) => { setUsername(e.target.value) }}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="email" placeholder="الايميل" onChange={(e) => { setEmail(e.target.value) }}/>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              {/* <Form.Group as={Col} controlId="formGridState">
                <Form.Select defaultValue="Choose...">
                  <option>الجنس</option>
                  <option>ذكر</option>
                  <option>أنثى</option>
                </Form.Select>
              </Form.Group> */}
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="كلمة المرور" onChange={(e) => { setPassword(e.target.value) }}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="تاكيد كلمة المرور" onChange={(e) => { setValidPassword(e.target.value) }}/>
              </Form.Group>
            </Row>
            <Button id="button" variant="primary" type="submit" size="lg">
              سجل
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
