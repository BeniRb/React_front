import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Apptest from './app/Apptest';
import Login from './app/Login';
import Products from './app/Products';
// import Adminpage from './app/Adminpage';
import Registration from './app/Registration';
import Cart from './app/Cart';
import './bootstrap.min.css'
import Home from './Home'




const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Apptest/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home />}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/products" element={<Products />}/>
                    {/* <Route path="/categories" element={<Category />} >
                        <Route path=":id" element={<Products />} />
                    </Route> */}
                    <Route path="/cart" element={<Cart />} />
                    {/* <Route path="/adminpage" element={<Adminpage/>} /> */}
                </Route>
            </Routes>
        </Provider>
    </BrowserRouter>
);
