import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Col, Button, Row } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPoster() {
  const [data, setData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const id = localStorage.getItem("id")
  const token = localStorage.getItem("token")
  const [title, setTitle] = useState()
  const [type, setType] = useState()
  const [city, setCity] = useState()
  const [image, setImage] = useState()
    useEffect(() => {
    axios
      .get(`https://greenksa-2030.herokuapp.com/posts/user/${id}?search=${params.id}`)
      .then((res) => {
        console.log(res.data.Posts);
        setData(res.data.Posts[0]);
        setTitle(res.data.Posts[0].title)
        setType(res.data.Posts[0].type)
        setCity(res.data.Posts[0].city)
        setImage(res.data.Posts[0].image)
      })
      .catch((err) => {
        console.log(err);
        navigate('/')
      });
  }, []);
  const postData = (e) => {
    e.preventDefault()
    axios
    .patch(`https://greenksa-2030.herokuapp.com/posts/edit/${params.id}`,{
      title,
      type,
      city,
      image
    },{
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      console.log(res.data.msg)
      navigate(`/profile/${id}`)
    }).catch(err => {
      console.log(err)
      alert(err.response.data.msg)
    })
  }
  return (
    <div className='loginRegister'>
      <Form onSubmit={postData}>
        <h1>بيانات الزرعة</h1>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="text" placeholder="أضف العنوان" defaultValue={data.title} onChange={(e) => { setTitle(e.target.value) }}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
          <Form.Select value={data.type} onChange={(e) => { setType(e.target.value) }}>
              <option value={data.type}>{data.type}</option>
              <option value="نخيل">نخيل</option>
              <option value="شجرة النيم">شجرة النيم</option>
              <option value="شجرة الفيكس الامريكي">شجرة الفيكس الامريكي</option>
              <option value="شجرة الخبيز الساحلي ">شجرة الخبيز الساحلي </option>
              <option value="شجرة اللبخ'">شجرة اللبخ'</option>
              <option value="شجرة الفيكس النقالي">شجرة الفيكس النقالي</option>
              <option value="شجرة فرشاة الزجاج">شجرة فرشاة الزجاج'</option>
              <option value="ورود صغيره'">ورود صغيره'</option>
              <option value="شجرة عادية ">شجرة عادية </option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Select Value={data.city} onChange={(e) => { setCity(e.target.value) }}>
              <option value={data.city}>{data.city}</option>
              <option value="مكة المكرمة">مكة المكرمة</option>
              <option value="الرياض">الرياض</option>
              <option value="الشرقية">الشرقية</option>
              <option value="عسير">عسير</option>
              <option value="المدينة المنورة">المدينة المنورة</option>
              <option value="جازان">جازان</option>
              <option value="القصيم">القصيم</option>
              <option value="تبوك">تبوك</option>
              <option value="حائل">حائل</option>
              <option value="نجران">نجران</option>
              <option value="الجوف">الجوف</option>
              <option value="الباحة">الباحة</option>
              <option value="الحدود الشمالية">الحدود الشمالية</option>
            </Form.Select>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>أضف صورة الزرعة</Form.Label>
              <Form.Control type="url"  defaultValue={data.image} onChange={(e) => { setImage(e.target.value) }}/>
            </Form.Group>
          </Form.Group>
        </Row>
        <Button id="button" variant="primary" type="submit" size="lg">
          تأكيد
        </Button>
        <Button id="button" className='text-warning' type="submit" size="lg" onClick={()=> navigate(`/profile/${id}`)}>
          تراجع
        </Button>
      </Form>
    </div>
  );
}
