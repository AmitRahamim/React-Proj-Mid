import { useState, useEffect } from 'react';

function UserTodoAddComp(props) {
  const [usertitle, setUserTitle] = useState([]);
  const [userposts, setUserPosts] = useState([]);
  const [visblecomp, setVisablecomp] = useState(true);
  


  const markCancel = () => {
    props.markcancel(false);
  }
  const senttheTitle = (title ,id)=> {
    props.sentTitle(title,id);
  }

  return (
    <>
    
       <h3> new todo : user {props.userid} :</h3>
       <div style={{ border: "3px solid black", width: "400px", height: "fit-content" }}>
       title :  
                <input 
                  type="text" 
                  onChange={(e) => setUserTitle(e.target.value)} 
                /><br /> <br />
       <button onClick={markCancel}>cancel</button> <button onClick={() => senttheTitle(usertitle, props.userid)}>Add</button>

       </div>
    </>
  );
}

export default UserTodoAddComp;
