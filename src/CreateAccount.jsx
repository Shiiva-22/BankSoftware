import { useState } from "react";
import "./CreateAccount.css";

const CreateAccount=()=>{


    const [username,setname]= useState('');
    const [userAge,setAge]= useState('');
    const [userAccountNo,setAccountNo] = useState('');
    const [userAccountType,setAccountType] = useState("");
    const [userAmount,setAmount] = useState("");


    const Submit=()=>{

        let newuserdata ={
        AccountNo:userAccountNo,
          Name:username,
          Age:userAge,
          AccountType:userAccountType,
          Balance:userAmount
        }
     data.push(newuserdata);
     console.log(newuserdata);
        
    }

    return(
        <div>
            <form className="Form-wrapper" >
                <input type="text"
                placeholder="Enter Name"
                onChange={(e)=>setname(e.target.value)}
                /><br/>
                <input type="number"
                placeholder="Enter Age"
                onChange={(e)=>setAge(e.target.value)}
                
                /><br/>
                <input
                type="number"
                placeholder="Enter Account Number"
                onChange={(e)=>setAccountNo(e.target.value)}

                /><br/>
                <select>
               
                <option disabled  onChange={(e)=>setAccountType(e.target.value)}> Account Type</option>

                    <option value="Salary Account">Salary Account</option>
                    <option value="Current Account">Current Account</option>
                    <option value="Saving Account">Saving Account</option>

                </select><br/>

                <input type="number"
                placeholder="enter Amount"
                onChange={(e)=>setAmount(e.target.value)}

                /><br/>

                <button onClick={Submit}>Submit</button>
                
                

                
                
            
            </form>
        </div>
    )
}

export default CreateAccount;