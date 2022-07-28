
import React, { Component } from 'react'
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MosalRed() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        اللون الاحمر
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{background:'#FACBC3'}} closeButton>
        <h5>تنبيه !</h5>
        </Modal.Header>
        <Modal.Body style={{background:'#FACBC3'}} >
            
            <p>هل تريد حفظ التغييرات</p>

      
          <Button style={{background:'#E8021F'}} onClick={handleClose}>
           موافق
          </Button>
          <Button style={{background:'#E8021F'}} onClick={handleClose}>
           الغاء
          </Button>
          </Modal.Body>
        
      </Modal>

  
    </div>
  )
}
