import { useState, useEffect } from 'react';
import axios from 'axios';
import UserComp from './UserComp';
import UserTodosAndPostComp from './UserTodosAndPosts';
import UserAddComp from './UserAddPage';

const UsersUrl = 'https://jsonplaceholder.typicode.com/users';
const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
const PostsUrl = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [ID, setID] = useState(''); // Store selected user ID
  const [users, setUser] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [Search, setSearch] = useState('');
  const [adduser, setAddUser] = useState(false);

  useEffect(() => {
    const UserData = async () => {
      const { data } = await axios.get(`${UsersUrl}`);
      setUser(data);
    };
    const UserTitles = async () => {
      const { data } = await axios.get(`${todosUrl}`);
      setTodos(data);
    };
    const UserPosts = async () => {
      const { data } = await axios.get(`${PostsUrl}`);
      setPosts(data);
    };
    UserData();
    UserTitles();
    UserPosts();
  }, []);

  const getupdate = (id, name, email) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users[i].name = name;
        users[i].email = email;
        break;
      }
    }
  };

  const getdelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUser(updatedUsers);
  };

  const getid = (id) => {
    // Toggle the visibility of the selected user info
    setID((prevId) => (prevId === id ? '' : id)); // If the same user is clicked, hide the component
  };
  const markcompleted = (todoId) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  }

  const AddtTitle = (title, id) => {
    const obj = {
      userId: id,
      title: title,
      id: todos.length + 2
    }
    setUser([...users, obj]); 
  }
  const AddPost = (title, body, id) => {
    const obj = {
      userId: id,
      title: title,
      body: body,
      id: posts.length + 2
    }
    setPosts([...posts, obj]); 
  }
  const AddNewUser = (name, email) => {
    const obj = {
      name: name,
      email: email,
      id: users.length + 1
    }
    setUser([...users, obj]);
  }
  const markCanceluser = (flag) => {
    setAddUser(flag);
  }
  const displayuser = (flag) => {
    setAddUser(flag);
  }

  return (
    <>
      <div style={{ border: "3px solid black", padding: '10px', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          {/* Text "Search" and the search input */}
          <label htmlFor="searchInput" style={{ marginRight: '10px' }}>Search:</label>
          <input 
            id="searchInput"
            type="text" 
            style={{ border: "1px solid black", width: '200px' }} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          {/* Add User button */}
          <button 
            style={{ 
              backgroundColor: '#fadc46', 
              marginLeft: 'auto',
              padding: '5px 10px',
              cursor: 'pointer' 
            }}
            onClick={() => setAddUser(true)}
          >
            Add User
          </button>
        </div>

        <UserComp 
          showtodosandposts={getid} 
          updatedata={getupdate} 
          deletedata={getdelete} 
          users={users} 
          todos={todos} 
          posts={posts} 
          search={Search} 
          divclick={displayuser} 
        />
      </div>
      
      {/* Conditionally render UserTodosAndPostComp outside the App's main black border */}
      {adduser === false && ID && (
        <div
          style={{
            position: 'absolute',
            top: '0px',
            left: '420px',
            width: 'fit-content',
            padding: '10px',
            marginLeft: '70px',
          }}
        >
          <UserTodosAndPostComp 
            userid={ID} 
            posts={posts} 
            todos={todos} 
            markCompleted={markcompleted} 
            sentTitle={AddtTitle} 
            sentPost={AddPost} 
          />
        </div>
      )}

      {adduser && (
        <div
          style={{
            position: 'absolute',
            top: '0px',
            left: '420px',
            width: 'fit-content',
            padding: '10px',
            marginLeft: '70px',
          }}
        >
          <UserAddComp 
            markcanceluser={markCanceluser} 
            sentUser={AddNewUser} 
          />
        </div>
      )}
    </>
  );
}

export default App;
