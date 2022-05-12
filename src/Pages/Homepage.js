import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Homepage = ({ products, DeleteProduct }) => {

    const Edit = () => {
        setShowEdit(true)
    }

    const [showEdit, setShowEdit] = useState(false)


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Link to="/inventory">
                            <Button variant="primary" size="lg" className='mt-2'>
                                Inventory
                            </Button>
                        </Link>
                    </Col>
                </Row>

            </Container>
            <Container>
                <Row>
                    <Col>
                        <div>
                            {products.map(item => {
                                return (
                                    <div key={item.proName} >
                                        <Card className='mt-5' style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>{item.proName}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{item.proPrice}</Card.Subtitle>
                                                <Card.Text>
                                                    {item.proFeatures}
                                                </Card.Text>
                                            </Card.Body>
                                            <div>
                                                <Button variant="primary" size="md">Add To cart</Button>
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
