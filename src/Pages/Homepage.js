import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { NavbarItem } from '../Components/NavbarItem';
import { Filter } from '../Components/Filter';
import { Cards } from '../Components/Cards';


export const Homepage = ({ products, DeleteProduct, AddCart, count }) => {

    return (
        <div>
            <NavbarItem count={count} />
            <Container>
                <Row>
                    <Col md={4}>
                        <Filter />
                    </Col>
                    <Col>
                        <div>
                            {products.map(item => {
                                return (
                                    <div key={item.proId} >
                                        <Cards item={item} DeleteProduct={DeleteProduct} AddCart={AddCart} />
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
