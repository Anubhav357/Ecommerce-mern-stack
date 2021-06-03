import React from 'react';
import Rating from './Rating';
import Products from '../products';
import {Button,Card,Row,Col,Image,ListGroup,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ProductScreen=({match})=>{
  const product=Products.find((prod)=>prod._id===match.params.id);//Can get query as match
  return(
    <React.Fragment>
      <Link className="btn btn-light my-3" to="/">Go back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid rounded/>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item><h3>Welcome</h3></ListGroup.Item>
            <ListGroup.Item><Rating value={product.rating} text={`from ${product.numReviews} number of reviews`}/></ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
        </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.countInStock>0?'in stock':'out of stock'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Button className="btn-block" type="button" disabled={product.countInStock===0}>Add To Cart</Button>
                </Row>
            </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default ProductScreen;
