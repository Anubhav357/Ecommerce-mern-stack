import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Row,Col} from 'react-bootstrap';
import Product from './product';
import {listProducts} from '../actions/productActions';
import Loader from './loader';
import Message from './Message';

const HomeScreen=()=>{
  const dispatch=useDispatch();
  const productList=useSelector(state=>state.productList);
  const {error,loading,products}=productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return(
    <>
      <h1>Latest Products</h1>
      {(loading)?<Loader/>:(error)?(<Message>{error}</Message>):(
        <Row>
          {
            products.map(product=>{
              return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product}/>
                    </Col>
            })
          }
        </Row>
      )
      }
    </>
  )
}

export default HomeScreen;
