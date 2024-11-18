import { useState, useEffect } from 'react';
import UserOtherDataComp from './UserOtherData';

function UserComp(props) {
  const [userInputs, setUserInputs] = useState({}); // Store name, email, and id for each user
  const [showOtherData, setShowOtherData] = useState(null); // State to track which user to show other data for
  const [selectedUserId, setSelectedUserId] = useState(null); // Track the clicked user ID

  useEffect(() => {
    
    // Initialize userInputs state with default values (user.id, user.name, and user.email)
    const initialInputs = props.users.reduce((acc, user) => {
      acc[user.id] = { name: user.name, email: user.email, id: user.id }; // Include user ID, name, and email
      return acc;
    }, {});
  
    setUserInputs(initialInputs); // Set the initial state
  
  }, [props.users]); 

  const handleMouseOver = (userId) => {
    setShowOtherData(userId); // Set the current user ID to show the other data for
  };

  const handleMouseOut = () => {
    setShowOtherData(null); // Hide the other data when mouse leaves
  };

  // Update function for updating name and email
  const Update = (id, name, email) => {
    props.updatedata(id, name, email); // Call the parent component's function to update data
  }

  // Delete function for deleting user
  const Delete = (id) => {
    props.deletedata(id); // Call the parent component's function to delete user
  }

  // Handle input change for name and email per user
  const handleInputChange = (e, userId, field) => {
    const value = e.target.value;
    setUserInputs(prevState => ({
      ...prevState,
      [userId]: {
        ...prevState[userId],
        [field]: value,
      }
    }));
  }

  // Handle div click for toggling the color
  const handleDivClick = (userId) => {
    setSelectedUserId((prevId) => (prevId === userId ? null : userId)); // Toggle selected user
    props.showtodosandposts(userId);
    props.divclick(false)

  }
  const checktodoscompleted = (id) => {
    // Ensure that todos are being filtered based on the userId
    const userTodos = props.todos.filter(todo => todo.userId === id);
    
    // Check if all todos are completed
    return userTodos.every(todo => todo.completed === true);
  };

  return (
    <>
      {
        props.users.map((user) => {
          // Check if props.search is not empty and if name or email contains the search string
          if (props.search !== '' && (
              user.name.toLowerCase().includes(props.search.toLowerCase()) || 
              user.email.toLowerCase().includes(props.search.toLowerCase()))) {
            return (
              <div 
                key={user.id} 
                onClick={() => handleDivClick(user.id)}  // Toggle background color on click
                style={{
                  border:  checktodoscompleted(user.id)===true ? "1px solid green" :"1px solid red" ,
                  width: "400px", 
                  height: "fit-content", 
                  backgroundColor: selectedUserId === user.id ? "orange" : "white",  // Toggle color based on selected user
                  marginBottom: "20px", 
                  padding: "10px",
                  position: "relative" // For positioning buttons
                }}
              >
                ID :  {user.id} <br /> <br />
                {/* Controlled input fields */}
                Name :  
                <input 
                  type="text" 
                  value={userInputs[user.id]?.name || user.name}  // Use user specific name, fallback to default if not yet updated
                  onChange={(e) => handleInputChange(e, user.id, 'name')} 
                /><br /> <br />
                Email :  
                <input 
                  type="text" 
                  value={userInputs[user.id]?.email || user.email} // Use user specific email, fallback to default if not yet updated
                  onChange={(e) => handleInputChange(e, user.id, 'email')} 
                /><br /> <br /><br /> <br />
                <button style={{ backgroundColor: 'gray'}}
                  onMouseOver={() => handleMouseOver(user.id)} 
                  onMouseOut={handleMouseOut}
                >
                  Other Data
                </button> 
                {/* Update and Delete buttons */}
                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                  <button 
                    style={{ backgroundColor: '#fadc46' }}  
                    onClick={() => Update(user.id, userInputs[user.id]?.name || user.name, userInputs[user.id]?.email || user.email)}
                  >
                    UPDATE
                  </button>
                  <button 
                    style={{ backgroundColor: '#fadc46' }}  
                    onClick={() => Delete(userInputs[user.id]?.id || user.id)}
                  >
                    Delete
                  </button>
                </div>
                {showOtherData === user.id && <UserOtherDataComp user={user} />} {/* Conditionally render the component */}
              </div>
            )
          }
          else if(props.search === '') {
            return (
              <div 
                key={user.id} 
                onClick={() => handleDivClick(user.id)}  // Toggle background color on click
                style={{
                  border: checktodoscompleted(user.id) ? "1px solid green" :"1px solid red" ,
                  width: "400px", 
                  height: "fit-content", 
                  backgroundColor: selectedUserId === user.id ? "orange" : "white", // Toggle color based on selected user
                  marginBottom: "20px", 
                  padding: "10px",
                  position: "relative" // For positioning buttons
                }}
              >
                ID :  {user.id} <br /> <br />
                {/* Controlled input fields */}
                Name :  
                <input 
                  type="text" 
                  value={userInputs[user.id]?.name || user.name}  
                  onChange={(e) => handleInputChange(e, user.id, 'name')} 
                /><br /> <br />
                Email :  
                <input 
                  type="text" 
                  value={userInputs[user.id]?.email || user.email} 
                  onChange={(e) => handleInputChange(e, user.id, 'email')} 
                /><br /> <br /><br /> <br />
                <button style={{ backgroundColor: 'gray'}}
                  onMouseOver={() => handleMouseOver(user.id)} 
                  onMouseOut={handleMouseOut}
                >
                  Other Data
                </button> 
                {/* Update and Delete buttons */}
                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                  <button 
                    style={{ backgroundColor: '#fadc46' }}  
                    onClick={() => Update(user.id, userInputs[user.id]?.name || user.name, userInputs[user.id]?.email || user.email)}
                  >
                    UPDATE
                  </button>
                  <button 
                    style={{ backgroundColor: '#fadc46' }}  
                    onClick={() => Delete(userInputs[user.id]?.id || user.id)}
                  >
                    Delete
                  </button>
                </div>
                {showOtherData === user.id && <UserOtherDataComp user={user} />} {/* Conditionally render the component */}
              </div>
            )
          }

          return null // If the user doesn't match the condition, return null
        })
      }
    </>
  )
}

export default UserComp;
