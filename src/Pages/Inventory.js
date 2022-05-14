import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavbarItem } from '../Components/NavbarItem';

export const Inventory = (props) => {

  const [newProducts, setNewProducts] = useState([]);

  const [name, setName] = useState("");
  const [features, setFeatures] = useState("");
  const [price, setPrice] = useState("");
  const [proId, setProId] = useState(0);
  const [size,setSize] = useState("")

  const GetProduct = (e) => {

    setProId(proId + 1);

    setNewProducts((oldPro) => [
      ...oldPro,
      {
        proName: name,
        proFeatures: features,
        proPrice: price,
        proId: proId,
        count: 1,
        proSize:size,
      }])

    e.preventDefault();
  }
 

  useEffect(() => {
    props.showData(newProducts)
    console.log(newProducts)
  }, [newProducts])




  return (
    <div>
      <NavbarItem />
      <Container className='mt-5'>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" name="name" onChange={(e) => setName(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Features</Form.Label>
                <Form.Control as="textarea" name="features" onChange={(e) => setFeatures(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="text" name="price" onChange={(e) => setPrice(e.target.value)} />
              </Form.Group>
              <Form.Group>
              <Form.Label>Size</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e) =>  setSize(e.target.value)}>
                  <option>Select size</option>
                  <option value="xl">XL</option>
                  <option value="l">L</option>
                  <option value="m">M</option>
                  <option value="s">S</option>

                </Form.Select>
              </Form.Group>

              <Button className="mt-2" onClick={GetProduct}>Add</Button>
            </Form>
          </Col>
        </Row>

      </Container>
    </div>

  )

}