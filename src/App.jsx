import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";



const App = () => {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [userblank, setuserblank] = useState(false);
  const [passblank, setpassblank] = useState(false);
  const [incorrectuser, setincorrectuser] = useState(false);
  const [incorrectpass, setincorrectpass] = useState(false);
  const [loginalert, setloginalert] = useState(false);

  const navi = useNavigate();
  
  

  const data = {
    username: "shiva",
    password: 123,
  };

  const submit = () => {
    if (user == "") {
      setuserblank(true);
      setincorrectuser(false);
      setincorrectpass(false);
    

    } else if (user !== data.username) {
      setincorrectuser(true);
      setuserblank(false);
  

    }

    if (pass == "") {
      setpassblank(true);
      setincorrectuser(false);
      setincorrectpass(false);
    

    } else if (pass !== data.pass) {
      setincorrectpass(true);
      setpassblank(false);
    }

    if (user == data.username && pass == data.password) {
      setloginalert(true);
      setuserblank(false);
      setpassblank(false);
      setincorrectuser(false);
      setincorrectpass(false);
      navi('/Dashboard');
    }

      
     
    
  };

 

  return (
    <div>
      <h1 className="heading1">Employee Login</h1>
      <div className="login">
        
        {loginalert && <p className="LoginAlert">Successfully Login!</p>}
        <input
        className="input1"
          type="text"
          placeholder="Enter Username"
          onChange={(e) => setuser(e.target.value)}
        />
        <br />
        {incorrectuser && <p className="input1Alert">Incorrect UserName</p>}
        {userblank && <p className="input1Alert">Filled is Required </p>}

        <input
        className="input2"

          type="password"
          placeholder="Enter Password"
          onChange={(e) => setpass(e.target.value)}
        />
        <br />
        {incorrectpass && <p className="input2Alert">Incorrect Password</p>}

        {passblank && <p className="input2Alert">Filled is Required </p>}

        <button className="btn" onClick={submit}>SUBMIT</button>
      </div>
    </div>
  );
};
export default App;
