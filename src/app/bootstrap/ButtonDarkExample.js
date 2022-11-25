import './dropsearch.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../productSlice';

function ButtonDarkExample() {
  return (
    <div display="grid">
    <select class="dropdown" id="alphalist">   
    <option value="a">Dairy</option>   
    <option value="b">Fruits</option>
    <option value="c">Vegetables</option>
  </select>

  <div class="search_bar">
    <input class="search_nav" type="text" placeholder="Search..."/>        
    <span class="fa fa-search"></span>   
  </div>
  </div>
  );
}

export default ButtonDarkExample;