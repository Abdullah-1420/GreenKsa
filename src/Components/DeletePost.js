import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function DeletePost(props) {
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.delete(`https://greenksa-2030.herokuapp.com/posts/delete/${params.id}`,{
            headers: { Authorization: `Bearer ${token}` },
          })
            .then(res => {
                console.log(res);
                navigate(`/profile/${id}`)
            })
            .catch(res => { console.log(res.response) 
                alert(res.response.data.msg)
            navigate('/')})
    }, [])}