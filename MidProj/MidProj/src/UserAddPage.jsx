import { useState} from 'react';

function UserAddComp(props) {
  const [username, setUserName] = useState([]);
  const [useremail, setUserEmail] = useState([]);
  

  const markCancel = () => {
    props.markcanceluser(false);
  }
  const AddUser = (name,email)=> {
    props.sentUser(name,email);
  }
    return (

      <>

      <h3> new user page :</h3>
       <div style={{ border: "3px solid black", width: "400px", height: "fit-content" }}>
       name :  
                <input 
                  type="text" 
                  onChange={(e) => setUserName(e.target.value)} 
                /><br /> <br />
       
       email :  
                <input 
                  type="text" 
                  onChange={(e) => setUserEmail(e.target.value)} 
                /><br /> <br />

       <button onClick={markCancel}>cancel</button> <button onClick={() => AddUser(username,useremail)}>Add</button>
       </div>
      </>
    );
  }

export default UserAddComp;
