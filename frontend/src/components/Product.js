import React from 'react'
import {Card, Button} from "react-bootstrap";

const Product = ({product}) => {
    return (
        <>
        <Card className="my-3 p-3 rounded" style={{ width: '17rem'}}>
            <Card.Img variant="top" src={product.images} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text as="h3" >${product.price}</Card.Text>
            <Button variant="primary">View</Button> 
        </Card.Body>
        </Card>
        </>
    )
}

export default Product

