import React from 'react'
import{AiFillDelete} from "react-icons/ai"
import{MdOutlineDone} from"react-icons/md"

export default function TodoItem (props) {
  const {todo,removeTodo,completeTodo} = props
    return (
        <div className={todo.completed?"todo-row complete":"todo-row"}>
{props.todo.text}
<div className="iconsContainer">

<AiFillDelete style={{marginRight:5}} onClick={()=>removeTodo(todo.id)}/>
<MdOutlineDone onClick={()=>completeTodo(todo.id)}/>
</div>
        </div>
    )
}
