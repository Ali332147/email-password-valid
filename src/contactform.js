import './App.css';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
// this is old sysstem
function App() {

  let auth=getAuth(app);
  let handleEmail=e=>{
    console.log(e.target.value);
  }
  let handlePassword=e=>{
    console.log(e.target.value);
  }
  let handleSubmit=e=>{
    console.log("working");
    e.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
      <input onBlur={handleEmail} type="email" name="" id="" /><br />
      <input onBlur={handlePassword} type="password" name="" id="" /><br />
      <input type="Submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
