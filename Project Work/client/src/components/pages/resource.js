import React, { useState } from 'react';
import TodoForm from './resourceForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Resource = ({ todos, completeTodo, removeTodo, updateTodo}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
 
  
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  if(todos.length!==0)
  {
    return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
      <a href={todo.text} target="_blank">{todo.topic}</a>
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value:''})}
          className='edit-icon'
        />
      </div>
    </div>
  ));
  }
  else
  return null;
};

export default Resource;