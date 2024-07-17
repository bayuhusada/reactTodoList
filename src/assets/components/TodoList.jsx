import { CheckCircle, Circle, Recycle, Trash } from '@phosphor-icons/react'
import React from 'react'

const TodoList = ({text, id, isComplete, deleteTodo, toggle}) => {

  return (
    <div className='flex items-center my-3 gap-2 break-words overflow-hidden'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
        {isComplete ? <CheckCircle size={30} weight='fill' color='#fbb6b6' /> : <Circle size={30} weight='duotone' color='#fbb6b6'/>}
        <p className={`text-white max-w-[300px] ml-2 decoration-red-600 ${isComplete ? "line-through" : ""} `}>{text}</p>
      </div>
      <Trash onClick={()=>{deleteTodo(id)}} size={25} weight='bold' className='cursor-pointer' />
    </div>
  )
}

export default TodoList