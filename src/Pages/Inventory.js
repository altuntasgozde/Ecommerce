import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Inventory = (props) => {

  const [newProducts, setNewProducts] = useState([]);

  const [name, setName] = useState("");
  const [features, setFeatures] = useState("");
  const [price, setPrice] = useState("");
  const [proId, setProId] = useState(0)

  const GetProduct = (e) => {

    setProId(proId + 1);

    setNewProducts((oldPro) => [
      ...oldPro,
      {
        proName: name,
        proFeatures: features,
        proPrice: price,
        proId: proId
      }])

    e.preventDefault();
  }

  useEffect(() => {
    props.showData(newProducts)
  }, [newProducts])




  return (
    <div>
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
              <Button className="mt-2" onClick={GetProduct}>Add</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/">
              <Button className="mt-2">Back to Homepage</Button>
            </Link>
          </Col>
        </Row>

      </Container>
    </div>

  )

}