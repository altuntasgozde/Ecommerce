import React, {useEffect} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from "react-router";

export const EditProduct = ({products}) => {

  let { id } = useParams();

  useEffect(() => {
    console.log(id);
  });

  return (
    <div>
      {products.filter((product) => product.proId == id).map((item) =>{ 
        return (
          <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control value={item.proName} type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Features</Form.Label>
            <Form.Control value={item.proFeatures} type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Product Price</Form.Label>
            <Form.Control value={item.proPrice} type="text" />
          </Form.Group>
          <Button variant="primary">
            Save
          </Button>
        </Form>
        )
  
        })}
   </div>
  )
}
