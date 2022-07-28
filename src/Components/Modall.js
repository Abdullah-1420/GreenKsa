
import React, { Component } from 'react'
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Modall() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        اللون الاخضر
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{background:'#D4F6CC'}} closeButton>
        <h5>تنبيه !</h5>
        </Modal.Header>
        <Modal.Body style={{background:'#D4F6CC'}} >
            
            <p>هل تريد حفظ التغييرات</p>

      
          <Button variant="success" onClick={handleClose}>
           حسنا
          </Button>
          </Modal.Body>
        
      </Modal>

  
    </div>
  )
}
