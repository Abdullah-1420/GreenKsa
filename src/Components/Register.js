import React, { useState } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";


export default function Register() {
  const [key, setKey] = useState("home");

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="تسجيل الدخول">
          <div className="loginRegister">
              <Form>
                <h1>تسجيل الدخول</h1>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="text" placeholder="اسم المستخدم" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="password" placeholder="كلمة المرور" />
                  </Form.Group>
                </Row>

                <Button id="button" variant="primary" type="submit" size="lg">
                  دخول
                </Button>

                <Button id="button" variant="primary" type="submit" size="lg">
                  سجل معنا
                </Button>
              </Form>
            </div>
        </Tab>
        <Tab eventKey="profile" title="التسجيل">
        </Tab>
      </Tabs>
    </div>
  );
}
