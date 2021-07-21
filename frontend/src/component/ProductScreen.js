import React,{useState,useEffect} from 'react';
import Rating from './Rating';
import Loader from './loader';
import Message from './Message';
import Products from '../products';
import {Button,Card,Row,Col,Image,ListGroup,Container,Form,FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import {listProductsDetails} from '../actions/productActions';

const ProductScreen=({history,match})=>{
  const [qty, setQty] = useState(1);
  const dispatch=useDispatch();
  const productDetailsList=useSelector(state=>state.productDetails);
  const {loading,error,product}=productDetailsList;
  useEffect(() => {
    dispatch(listProductsDetails(match.params.id));
  },[dispatch,match])
  const addToCartHandler=()=>{
    history.push(`/cart/${match.params.id}/?qty=${qty}`);
  }
  return(
    <React.Fragment>
      {(loading)?<Loader/>:(error)?(<Message>{error}</Message>):(
        <>
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
                {
                  product.countInStock>0&&(
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col md={8}>
                          <Form.Control as="select" value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                          {
                              [...Array(product.countInStock).keys()].map(x=>(
                                <option key={x+1} value={x+1}>{x+1}</option>
                              ))
                          }
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )
                }
                <ListGroup.Item>
                  <Row>
                    <Button onClick={addToCartHandler} className="btn-block" type="button" disabled={product.countInStock===0}>Add To Cart</Button>
                  </Row>
              </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        </>
      )}
    </React.Fragment>
  );
}

export default ProductScreen;
