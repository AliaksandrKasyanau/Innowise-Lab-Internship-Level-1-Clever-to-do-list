import React from 'react';
import { useContext } from 'react';
import { TodosContext } from '../../providers/DaysProvider';
import AddTodo from '../AddToDoPage/AddToDo';

function AddToDoPage() {
  const [todo] = useContext(TodosContext);
  console.log(todo);
  return (
    <div className="todo-wrapper">
      <AddTodo />
    </div>
  );
}

export default AddToDoPage;
