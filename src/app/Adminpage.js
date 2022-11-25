import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAsync, selectProducts, addProductAsync ,updProductAsync,delProductAsync,} from './productSlice';
import { selectToken } from './loginSlice';



const Adminpage = () => {
  const token = useSelector(selectToken)
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()
  const [desc, setDesc] = useState("")
  const [price, setPrice] = useState(0)
  const [img, setimg] = useState("")
  const [category, setcategory] = useState("")

  useEffect(() => {
    dispatch(getProductsAsync(token));
  }, [products.length]);



  return (
    <div align="center">
      <hr/>
      Image: <input type="image"/><br></br>
      Item: <input onChange={(e) => setDesc(e.target.value)} /><br></br>
      Price: <input onChange={(e) => setPrice(e.target.value)} /><br></br>
      Category:<input onChange={(e) => setcategory(e.target.value)} /><br></br>
      <button
        onClick={() =>
          dispatch(
            addProductAsync({
              desc: desc,
              price: price,
              category:category,
              token
              }))}>
        Add
      </button>

      <br/>
      products in the shop: {products.length}
      <br/>
      {products.length >0 &&  products.map( prod=> <div>category: {prod.category}{" "} Name: {prod.desc}{" "} {prod.price}{" "}₪<button
            onClick={() =>
              dispatch(updProductAsync({id: prod.id,desc: desc,price: price,category:category,token}))}>Update </button>

          <button
        onClick={() =>
          dispatch(
            delProductAsync({
              id: prod.id,
              token

            })
          )
        }
      >
        delete product
      </button>
          </div>)}
      
      <br></br>
      <hr/>
      <button
        onClick={() =>
          dispatch(
            getProductsAsync(token)
          )
        }
      >
        refresh
      </button>

      
      
    </div>
  )
}

export default Adminpage

