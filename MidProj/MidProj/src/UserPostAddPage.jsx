import { useState} from 'react';

function UserPostAddComp(props) {
  const [usertitle, setUserTitle] = useState([]);
  const [userbody, setUserBody] = useState([]);
  

  const markCancel = () => {
    props.markcancelpost(false);
  }
  const sentthePost = (title,body,id)=> {
    props.sentPost(title,body,id);
  }

  return (
    <>
    
       <h3> new post : user {props.userid} :</h3>
       <div style={{ border: "3px solid black", width: "400px", height: "fit-content" }}>
       title :  
                <input 
                  type="text" 
                  onChange={(e) => setUserTitle(e.target.value)} 
                /><br /> <br />
       
       body :  
                <input 
                  type="text" 
                  onChange={(e) => setUserBody(e.target.value)} 
                /><br /> <br />

       <button onClick={markCancel}>cancel</button> <button onClick={() => sentthePost(usertitle,userbody, props.userid)}>Add</button>

       </div>
    </>
  );
}

export default UserPostAddComp;
