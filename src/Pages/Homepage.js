import React from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavbarItem } from '../Components/NavbarItem';


export const Homepage = ({ products, DeleteProduct, AddCart,count }) => {

    return (
        <div>
        <NavbarItem count={count}/>
            <Container>
                <Row>
                    <Col>
                        <div>
                            {products.map(item => {
                                return (
                                    <div key={item.proId} >
                                        <Card className='mt-5' style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{item.proName}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{item.proPrice}</Card.Subtitle>
                                                <Card.Text>
                                                    {item.proFeatures}
                                                </Card.Text>
                                            </Card.Body>
                                            <div>
                                                <Button onClick={() => AddCart(item.proId)} variant="primary" size="md">Add To cart</Button>
                                                <Button onClick={() => DeleteProduct(item.proId)} className='m-3' variant="danger" size="md">delete</Button>
                                                <Link to={"/pro/" + item.proId}>Edit</Link>
                                            </div>
                                        </Card>
                                    </div>
                                )
                            })}

                        </div>
                    </Col>
                </Row>
                
            </Container>

        </div>
    )
}
