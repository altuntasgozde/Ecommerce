import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

export const Filter = ({ ChangeSize, UpdateProduct,GetSearchValue }) => {


  return (
    <div>
      <Card className='mt-5' style={{ width: '18rem' }}>
        <Card.Body>
          <Form>
            <Form.Group>
            <Form.Label>Search</Form.Label>

              <Form.Control type="text" placeholder="Search" onChange={GetSearchValue}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Size</Form.Label>
              <Form.Check type="checkbox" label="XL" value="xl" onChange={ChangeSize} />
              <Form.Check type="checkbox" label="L" value="l" onChange={ChangeSize} />
              <Form.Check type="checkbox" label="M" value="m" onChange={ChangeSize} />
              <Form.Check type="checkbox" label="S" value="s" onChange={ChangeSize} />
              <Form.Check type="checkbox" label="XS" value="xs" onChange={ChangeSize} />
            </Form.Group>
          </Form>

          <Button onClick={UpdateProduct}>Update</Button>

        </Card.Body>
      </Card>
    </div>
  )
}
