import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import app from './firebase.init';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
let auth=getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  let [email,setEmail]=useState('');
  let[error ,setError]=useState('');
  let [password,setPassword]=useState('');
  let handleEmail=e=>{
    setEmail(e.target.value);
  }
  let handlePassword=e=>{
    setPassword(e.target.value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      
      event.stopPropagation();
      return;
    }
    if(!/^[a-z][-\s\.]$/.test(password)){
      setError('password small one');
      return;
    }
    setValidated(true);
  };
  let handleSubmit=e=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((res) => {
    const user = res.user;
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });
    e.preventDefault();
  }
  return (
  
<div className='body1'> 
  
    <div id="bp" class="container py-3">
        <div class="text-center py-lg-5">
            <h2 class="fw-bolder text-uppercase">BP</h2>
            <p class="text-dark fw-bolder fs-5">In BP, Counting Gallon and Check Price</p>
        </div>
        <div><h2 class="text-center pb-3 text-success text-decoration-underline">Date : Jan 30 , 2023 </h2></div>
        <div class="row">
            <div class="col-md-6 mb-3 text-center">
                <h3 class="text-primary">Count Gallon :</h3>
                <h3>Regular :<span class="text-info"> 1234</span></h3>
                <h3>Silver  :<span class="text-info"> 4567</span></h3>
                <h3>Super   : <span class="text-info"> 3456</span></h3>
                <h4>Diesel  :<span class="text-info"> 2354</span></h4>
            </div>
            <div class="col-md-6 text-center mb-3">
                <h2 class="fw-bold py-2"><span class=" text-primary">Price :</span></h2>
                <h4>Regular :<span class="text-info"> $3<sup>25</sup></span></h4>
                <h4>Silver :<span class="text-info"> $3<sup>80</sup></span></h4>
                <h4>Super :<span class="text-info"> $4<sup>25</sup></span></h4>
                <h4>Diesel :<span class="text-info"> $5<sup>25</sup></span></h4>
                </div>
            </div>
            <hr />


            <div><h2 class="text-center pb-3 text-success text-decoration-underline">Date : Jan 30 , 2023 </h2></div>
        <div class="row">
            <div class="col-md-6 mb-3 text-center">
                <h3 class="text-primary">Count Gallon :</h3>
                <h3>Regular :<span class="text-info"> 1234</span></h3>
                <h3>Silver  :<span class="text-info"> 4567</span></h3>
                <h3>Super   : <span class="text-info"> 3456</span></h3>
                <h4>Diesel  :<span class="text-info"> 2354</span></h4>
            </div>
            <div class="col-md-6 text-center mb-3">
                <h2 class="fw-bold py-2"><span class=" text-primary">Price :</span></h2>
                <h4>Regular :<span class="text-info"> $3<sup>25</sup></span></h4>
                <h4>Silver :<span class="text-info"> $3<sup>80</sup></span></h4>
                <h4>Super :<span class="text-info"> $4<sup>25</sup></span></h4>
                <h4>Diesel :<span class="text-info"> $5<sup>25</sup></span></h4>
                </div>
            </div>
            <hr />

            <div><h2 class="text-center pb-3 text-success text-decoration-underline">Date : Jan 30 , 2023 </h2></div>
        <div class="row">
            <div class="col-md-6 mb-3 text-center">
                <h3 class="text-primary">Count Gallon :</h3>
                <h3>Regular :<span class="text-info"> 1234</span></h3>
                <h3>Silver  :<span class="text-info"> 4567</span></h3>
                <h3>Super   : <span class="text-info"> 3456</span></h3>
                <h4>Diesel  :<span class="text-info"> 2354</span></h4>
            </div>
            <div class="col-md-6 text-center mb-3">
                <h2 class="fw-bold py-2"><span class=" text-primary">Price :</span></h2>
                <h4>Regular :<span class="text-info"> $3<sup>25</sup></span></h4>
                <h4>Silver :<span class="text-info"> $3<sup>80</sup></span></h4>
                <h4>Super :<span class="text-info"> $4<sup>25</sup></span></h4>
                <h4>Diesel :<span class="text-info"> $5<sup>25</sup></span></h4>
                </div>
            </div>
            <hr />

            <div><h2 class="text-center pb-3 text-success text-decoration-underline">Date : Jan 30 , 2023 </h2></div>
        <div class="row">
            <div class="col-md-6 mb-3 text-center">
                <h3 class="text-primary">Count Gallon :</h3>
                <h3>Regular :<span class="text-info"> 1234</span></h3>
                <h3>Silver  :<span class="text-info"> 4567</span></h3>
                <h3>Super   : <span class="text-info"> 3456</span></h3>
                <h4>Diesel  :<span class="text-info"> 2354</span></h4>
            </div>
            <div class="col-md-6 text-center mb-3">
                <h2 class="fw-bold py-2"><span class=" text-primary">Price :</span></h2>
                <h4>Regular :<span class="text-info"> $3<sup>25</sup></span></h4>
                <h4>Silver :<span class="text-info"> $3<sup>80</sup></span></h4>
                <h4>Super :<span class="text-info"> $4<sup>25</sup></span></h4>
                <h4>Diesel :<span class="text-info"> $5<sup>25</sup></span></h4>
                </div>
            </div>
            <hr />


            <div className="registration w-50 mx-auto mt-5">
  <h2 className='mb-4'>Please Register :</h2>
<Form noValidate validated={validated}  onSubmit={handleFormSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control onBlur={ handleEmail} type="email" required placeholder="Enter email" />
      <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label >Password</Form.Label>
      <Form.Control onBlur={handlePassword} required type="password" placeholder="Password" />
      <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  <hr />

  </div> 


        </div>
    </div>
  );
}

export default App;


