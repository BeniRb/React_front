import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from './app/loginSlice'
import Product from './app/Adminpage';
import Login from './app/Login';



function App() {
  const userName = useSelector(selectUserName);
  return (
    <div>
      {userName && <div>Hello {userName}</div>}
      <Login></Login>
      <Product></Product>

    </div>
    
    
  );
}

export default App;
