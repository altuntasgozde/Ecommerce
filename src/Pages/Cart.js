import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Cart = ({ cartArr }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Features</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cartArr.map(item => {
                                return (
                                    <tr key={item.proId}>
                                        <td>{item.count}</td>
                                        <td>{item.proName}</td>
                                        <td>{item.proFeatures}</td>
                                        <td>{item.proPrice}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
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
