import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link,useNavigate } from "react-router-dom";
import { doSigninAsync, selectEmail, doSignOutAsync,selectUserName,selectToken} from './loginSlice'


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useSelector(selectEmail);
    const userName = useSelector(selectUserName);
    const token = useSelector(selectToken);
    const [newUserName, setNewUserName] = useState("")
    const [newPwd, setNewPwd] = useState("")
    // const [newEmail, setNewEmail] = useState("")
    if(doSigninAsync && token){
        navigate('/products')
    }

    return (
        <div align="center">
            {userName && <h1>Welcome {userName}</h1>}
            <hr />
            {!token && <div>Username<br></br>  <input placeholder="Enter Username" onChange={(e) => setNewUserName(e.target.value)} /><br></br></div> }
            {/* Username  <input onChange={(e) => setNewUserName(e.target.value)} /><br></br> */}
           {!token && <div> Password <br></br> <input placeholder="Enter Password" onChange={(e) => setNewPwd(e.target.value)} type='password' /><br></br></div>}
            {!token && <button onClick={() => dispatch(doSigninAsync({ username: newUserName, password: newPwd }))}>Login</button>}<br></br>
            {/* {!token && <button onClick={() => dispatch(doSignupAsync({ username: newUserName, password: newPwd, email: newEmail }))}>register</button>}<br></br> */}
            {token && <button onClick={()=>dispatch(doSignOutAsync({token}))}>Logout</button>}

            {!token && <div>New Customer?<br></br> Click <Link to="/register">here</Link> to register</div>}
            {/* New Customer? <Link to="/register">Register</Link> */}
        </div>

    )
}
export default Login
