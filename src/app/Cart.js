import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectLogged } from './loginSlice'
import { Link,useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { delProduct } from './productsAPI';
import { selectMyCart, addItemToCart, deleteCart, removeItemFromCart } from './CartSlice'
import { addOrderAsync } from './orderSlice';


const Cart = () => {

  const notify = () => toast.success("order complete");
  let loggedIn = useSelector(selectLogged);
  const myCart = useSelector(selectMyCart);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [totall, settotall] = useState(0)


  const sumTotal =() =>{
    let i =0;
    let totprice =0;
    while (i<myCart.length){
      if(myCart[i].total>0){
        totprice +=myCart[i].total;
        i++;
        settotall(totprice)
      }
      else{
        i++;
      }
    }
  
  }
  
  useEffect(() => {
    sumTotal();
    

  }, [myCart.length,myCart])
  

  return (

    <div align="center">
      {loggedIn &&<div>
      {/* {myOrders && myOrders.length} */}     
      <table style={{border:"1px solid black",fontFamily:"arial",borderCollapse: "collapse",width:"70%",height:"60%",margin:"20px"}}>
  <tr>
    <th>Product </th>
    <th>Price</th>
    <th>Amount</th>
  </tr>
  {myCart && myCart.map(prod => (<tr>
    <td>{prod.desc}</td>
    <td>{prod.price}₪</td>
    <td><Button onClick={() => dispatch(addItemToCart({ _id: prod._id, desc: prod.desc, price: prod.price, amount: 1 ,total: 1}))}>+</Button>
    &nbsp; {prod.amount} &nbsp;
    <Button onClick={() => dispatch(addItemToCart({ _id: prod._id, desc: prod.desc, price: prod.price, amount: -1, total: 1 }))}>-</Button>
    </td>
    <td><Button onClick={() => dispatch(removeItemFromCart(prod._id))}>Delete</Button></td>
    </tr> ))}
</table>

<h3 align="center">Total amount:{totall}₪</h3>

      
        <div>
        <Button variant='outlined' onClick={() =>{;notify();dispatch(addOrderAsync({ myCart, token }));dispatch(deleteCart());
        setTimeout(function() {window.location.replace('/home');}, 2000)}}>Make order</Button>
        </div>
        <ToastContainer  position="bottom-center" autoClose={1000} />
        {/* <button onClick={() => console.table(myOrders)}>show MyOrders</button></div>} */}
       
       {!token &&
        <div>You need to <Link to="/login">login</Link> first</div>
      }
      </div>}
    </div>
  )
}
// setTimeout(function() {window.location.replace('/home');}, 2000)
export default Cart