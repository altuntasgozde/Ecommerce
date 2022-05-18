import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Cards = ({item,DeleteProduct, AddCart}) => {
    return (
        <div>
            <Card className='mt-5 p-3' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{item.proName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{item.proPrice}</Card.Subtitle>
                    <Card.Text>
                        {item.proFeatures}
                    </Card.Text>
                    <Card.Text>
                        {item.proSize}
                    </Card.Text>
                </Card.Body>
                <div className='d-flex justify-content-around'>
                    <Button onClick={() => AddCart(item.proId)} variant="primary" size="md">Add To cart</Button>
                    <Button onClick={() => DeleteProduct(item.proId)} variant="danger" size="md">delete</Button>
                    <Link to={"/pro/" + item.proId}>
                        <Button variant="warning">
                                Edit
                        </Button>
                    
                        </Link>
                </div>
            </Card>
        </div>
    )
}
