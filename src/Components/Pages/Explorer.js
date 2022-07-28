import React from 'react'

import{ Card, Button, Col, Row, Form, Collapse} from 'react-bootstrap';
import  { useState } from 'react';

import ShowPosters from '../ShowPosters'



export default function Explorer() {
    const [open, setOpen] = useState(false);
  return (
    <div>

        <ShowPosters />

    </div>
  )
}
