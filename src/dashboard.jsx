import { useState } from "react";
import "./dashboard.css";

import data from "./GlobalData.jsx"

import { Link } from "react-router-dom";


const Dasboard = () => {
  const [showdata, setshowdata] = useState(data);

  const Account = (val) => {
    let result = data.filter((item) => {
      if (item.AccountType == val) {
        return item;
      }
    });
    setshowdata(result);
  };

  const ResetData = () => {
    setshowdata(data);
  };

  return (
    <div>
      <nav className="nav-section">
        <div className="logo">
          <h1>BOI</h1>
          <span>Bank Of India</span>
        </div>
        <button><Link className="LInkCustom" to="/CreateAccount">Create Account</Link></button>
        <button>Deposite Amount</button>
        <button>Credit Amount</button>
      </nav>
      <div className="screen-wrapper">
        <section className="side-section">
          <div className="side-section-btns">
            <button onClick={ResetData}>All Data</button>
            <button onClick={() => Account("Saving")}>Saving Account</button>
            <br />
            <button onClick={() => Account("Salary")}>Salary Account</button>
            <br />
            <button onClick={() => Account("Current")}>Current Account</button>
          </div>
      
        </section>

        <div className="heading">
          <h3>ACCOUNT No.</h3>
          <h3>NAME</h3>
          <h3>AGE</h3>
          <h3>ACCOUNT TYPE</h3>
          <h3>BALANCE</h3>
        </div>
        <aside className="screen-section">
          {showdata.map((item, index) => (
            <div key={index} className="content">
              <h5>{item.AccountNo}</h5>
              <h5>{item.Name}</h5>
              <h5>{item.Age}</h5>
              <h5>{item.AccountType}</h5>
              <h5>{item.Balance}</h5>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default Dasboard;
