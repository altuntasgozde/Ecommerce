import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavbarItem } from '../Components/NavbarItem'

export const Cart = ({ cartArr, DeleteCartItem, count }) => {
    return (
        <div>
            <NavbarItem count={count} />
            <Container>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Features</th>
                                <th>Price</th>
                                <th></th>

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
                                        <td><Button onClick={() => DeleteCartItem(item.proId)}>Delete</Button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
            </Container>

        </div>
    )
}
