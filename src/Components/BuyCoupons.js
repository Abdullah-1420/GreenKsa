import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function BuyCoupons() {
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    const params = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://greenksa-2030.herokuapp.com/coupons/buy/${params.id}`,{
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
