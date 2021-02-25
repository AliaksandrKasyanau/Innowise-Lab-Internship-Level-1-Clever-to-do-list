import React, { useContext } from 'react';
import { Router } from '@reach/router';
import SignIn from '../Auth/SignIn/SignIn';
import SignUp from '../Auth/SignUp/SignUp';
import HomePage from '../HomePage/HomePage';
import { UserContext } from '../../providers/UserProvider';
import PasswordReset from '../Auth/PasswordReset/PasswordReset';

function Application() {
  /*const [todos, setTodos] = useState([]);
  useEffect(() => {
    db.collection('todos')
      .get()
      .then((snapshot) => {
        const todos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodos(todos);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, []);*/
  const user = useContext(UserContext);
  return user ? 
  
    (<div className="App">
    <main>
    <HomePage />
    </main>
    </div>
  ) : (
    <div className="App">
    <main>
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PasswordReset path="passwordReset" />
    </Router>
    </main>
    </div>
  );
   
  //       {/* <ul>
  //       {todos.map((todo) => (
  //         <li key={todo.id}>{todo.title}</li>
  //       ))}
  //     </ul> */}
     
}

export default Application;
