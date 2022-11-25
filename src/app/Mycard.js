import React, { useEffect, useState } from 'react'
import { Card} from 'react-bootstrap'
import Button from '@mui/material/Button';
import {decrement,increment,selectCount} from './counterSlice';
import { clearAr,sendCart } from './OrderSlice';
import { useSelector, useDispatch } from 'react-redux';

const Mycard = (props) => {

    const [myCart, setmyCart] = useState([])
    const dispatch = useDispatch();

    const addToCart = (item) => {
      let temp = myCart.find((x) => x._id === item._id);
      if (temp) {
        console.log("my cart amount aaaaaaaa",myCart[1].amount);
        temp.amount += item.amount;
        //   console.log(temp);
        setmyCart(myCart);
      } else {
        setmyCart([...myCart, item]);
        localStorage.setItem("myCart", JSON.stringify(myCart));
        // dispatch(sendCart(myCart));
      }
      console.table(myCart);
      localStorage.setItem("myCart", JSON.stringify(myCart));
      // dispatch(sendCart(myCart));
    };


  return (
    <Card style={{width: '20rem'}}>
        <Card.Img  width="350px" height="320px" variant='top' src={`http://127.0.0.1:8000/media/${props.prod.image}`} />
        <Card.Body>
            <Card.Title>{props.prod.desc}</Card.Title>
            <Card.Text>Price: {props.prod.price}₪</Card.Text>
            <Button variant="outlined"  onClick={() => addToCart({ _id: props.prod.id, desc: props.prod.desc, amount: 1,price:props.prod.price })}>Add to cart</Button>
            <Button  onClick={() => addToCart({ _id: props.prod.id, desc: props.prod.desc, amount: +1,price:props.prod.price })}>+</Button>
            {props.prod.amount}
        <Button onClick={() => addToCart({ _id: props.prod.id, desc: props.prod.desc, amount: -1,price:props.prod.price })}>-</Button>
        </Card.Body>
    </Card>
  )
}

export default Mycard