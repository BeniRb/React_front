import React, { useEffect, useState } from "react";
import { getProductsAsync, selectProducts} from './productSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from './loginSlice';
import { selectToken } from './loginSlice';
import Button from '@mui/material/Button';
import {Card} from "react-bootstrap";
import { selectLogged } from './loginSlice'
import { Link, useParams } from 'react-router-dom';
import { sendCart,clearAr } from "./CartSlice";
import {addItemToCart,selectMyCart } from "./CartSlice";





const Products = () => {
  let params = useParams();
  let id = params.id;
  let loggedIn = useSelector(selectLogged);
  const products = useSelector(selectProducts);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const myCart = useSelector(selectMyCart)
  const token = useSelector(selectToken);
  // const amount = useSelector(selectamount);
  //run every change in the length of myCart

  useEffect(() => {
    console.table(myCart)
    dispatch(getProductsAsync(token));
  }, []);


  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2">
       {!loggedIn && <div  style={{margin:"50px"}}align="center">Please <Link to="/login">log in</Link> to purchase items</div>}
       <br></br>

       {loggedIn && products.map( prod=> <div>{" "}
       <Card style={{ width:'20rem'}}>
      <Card.Img  width="350px" height="320px" variant="top" src={`http://127.0.0.1:8000/media/${prod.image}`} />
        <Card.Body>
          <Card.Title>{prod.desc} </Card.Title>
          <Card.Text >
          {prod.price}₪
          </Card.Text>
          <Card.Text >
          </Card.Text>
        </Card.Body>
        <Button variant="outlined" onClick={() => dispatch(addItemToCart({ _id: prod.id, desc: prod.desc, amount: 1,price:prod.price,total: prod.price }))}>
        Add to Cart
        </Button>  
        </Card>
        </div>)}
    </div>
     </div>
  )
}

export default Products
