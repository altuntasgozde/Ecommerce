import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from "react-router";

export const EditProduct = ({products}) => {

  let { id } = useParams();


  return (
    <div>

          <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Features</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="primary">
            Save
          </Button>
        </Form>
    
  
    
   </div>
  )
}
