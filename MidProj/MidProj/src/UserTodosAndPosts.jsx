import { useState, useEffect } from 'react';
import UserPostAddComp from './UserPostAddPage';
import UserTodoAddComp from './UserTodoAddPage';

function UserTodosAndPostComp(props) {
  const [usertodos, setUserTodos] = useState([]);
  const [userposts, setUserPosts] = useState([]);
  const [showTodoAdd, setShowTodoAdd] = useState(false);
  const [showPostAdd, setShowPostAdd] = useState(false);

  useEffect(() => {
    

    const UserTodos =  () => {
      const todos = props.todos.filter(todo => todo.userId === props.userid);
      setUserTodos(todos);
    };
    const UserPosts =  () => {
      const posts = props.posts.filter(post => post.userId === props.userid);
      setUserPosts(posts);
    };
    UserTodos();
    UserPosts();
  }, [props.todos, props.posts, props.userid ]); 

  const markCompleted = (id) => {
    props.markCompleted(id); 
  }

  const markcancel = (flag) =>
  {
    setShowTodoAdd(flag)
  }
  const markcancelpost = (flag) =>
  {
    setShowPostAdd(flag)
  }

  const sentAppTitle = (title,id) => 
  {
    props.sentTitle(title,id);
  }
  const MovePost = (title,body,id) => {
    props.sentPost(title,body,id);
  }
  
  

  

  return (
    <>
      {showTodoAdd === false  && (
      <div style={{ border: "3px solid black", width: "400px", height: "fit-content",padding: '5px' }}>
        <h3>
          Todos User : {props.userid}
          <button onClick={() => setShowTodoAdd(!showTodoAdd)}>Add Todo</button>
        </h3>

        {/* Conditionally render the UserTodoAddComp if showTodoAdd is true */}
        

        {/* Render the list of todos */}
        {usertodos?.map((todo) => {
          return (
            <div style={{ border: "2px solid purple" ,padding: '5px',marginBottom: '5px'}} key={todo.id}>
              title: {todo.title} <br />
              completed: {todo.completed ? "Yes" : "No"}
              {!todo.completed && (
                <button onClick={() => markCompleted(todo.id)}>Mark Completed</button>
              )}
            </div>
          );
        })}
      </div>
    )}
      {showTodoAdd && <UserTodoAddComp userid={props.userid} markcancel={markcancel} sentTitle={sentAppTitle} />}

      
      <br />
      {showPostAdd === false  && (
      <div style={{ border: "3px solid black",padding: '5px' }}>
        <h3> Posts User : {props.userid} <button onClick={()=> setShowPostAdd(!showPostAdd)}>add</button></h3>
        {
          userposts?.map((post) => {
            return (
              <div style={{ border: "2px solid purple" ,padding: '5px',marginBottom: '5px'}} key={post.id}>
                title: {post.title} <br />
                body: {post.body}
              </div>
            );
          })
        }
      </div>
      )}   
      {showPostAdd && <UserPostAddComp userid={props.userid} markcancelpost={markcancelpost} sentPost={MovePost} />}
    </>
  );
}

export default UserTodosAndPostComp;
