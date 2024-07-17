import { ListChecks, Plus } from '@phosphor-icons/react';
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null); // Create a reference to the input element

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === '') {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todo)=>{
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete}
        }
        return todo;
      })
    })
  }

  useEffect(()=>{
    console.log(todoList);
  },[todoList])

  return (
    <>
      <div className='bg-slate-400 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl'>
        <div className='flex p-3 gap-4 '>
          <ListChecks size={40} color='red' />
          <h1 className='text-white font-semibold text-3xl'>To-Do List!</h1>
        </div>
        <div className='flex items-center my-3 bg-slate-300 rounded-full'>
          <input ref={inputRef} className='bg-transparent border-0 font-semibold outline-none placeholder:text-slate-400 pl-4 px-3 flex-1 h-12' type="text" placeholder='Mau Ngapain Hari ini?..' />
          <button onClick={add} className='bg-red-400 w-32 h-12 rounded-full flex justify-center items-center hover:bg-slate-300 hover:text-red-600'> <Plus size={15}/>ADD</button>
        </div>

        <div>
          {todoList.map((item, index) => {
            return <TodoList key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;