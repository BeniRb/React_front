import React from 'react'


const Welcome = () => {
  const myStyle={
    backgroundImage: 
"url('http://127.0.0.1:8000/media/Posted_images/websitebg.png')",
};
  return (
    <div style={myStyle}>
      {/* <img style={{ height: '100%', width: '100%', backgroundSize: "cover" }} src="http://127.0.0.1:8000/media/Posted_images/websitebg.png">
      <h1 style={{padding:"50px"}}>Welcome to my E-commerce project</h1>
      </img> */}
      <h1 align="center" style={{padding:"50px"}}>Welcome to my E-commerce store</h1><br></br>
      <h4 align="center">this project was created using Django as a backend<br></br> and the front was created by React&Redux.js<br></br>
      enjoy your visit! </h4><br></br><br></br>
      <h4 align="center" style={{margin:"150px"}}>Find us on:<br></br>
      <a href="https://www.linkedin.com/in/beni-ribakov-942239233/"><img src="http://127.0.0.1:8000/media/Posted_images/linkedin.png" height="25px"></img></a>{"    "}
      <a href="https://github.com/BeniRb"><img src="http://127.0.0.1:8000/media/Posted_images/github-logo.png" height="25px"></img></a>{"    "}
      <a href="mailto:beni.ribakov@gmail.com"><img src="http://127.0.0.1:8000/media/Posted_images/gmail.png" height="25px"></img></a>{"    "}
      {/* <a href="asdasdasd"><img src="http://127.0.0.1:8000/media/Posted_images/facebook.png" height="25px"></img></a>{"    "} */}
      </h4>
      <h5 align="center">
        created by <a href="">Beni Ribakov</a></h5>

      <br></br><br></br><br></br>
      <br></br><br></br><br>
      </br><br></br>
      <br></br>
      <br></br>
      

      </div>
  )
}

export default Welcome