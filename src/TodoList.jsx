import React, { useState } from 'react'
import style from './TodoList.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodoItem } from './TodoSlice'

function TodoList() {
    const todo = useSelector(state => state.todo.todoList)


    return (
        <div className={style.TodoList}>
            <h2>Todo List</h2>

            {todo.map((item, id) => (
                <Task key={id} task={item} />
            ))
            }

        </div >
    )
}

const Task = ({ task }) => {
    const [done, setDone] = useState(false)
    const dispatch = useDispatch()

    return (
        <div className={style.taskContainer}>


            <p className={done && style.doneClass}>{task.value}</p>
            <div className={style.buttonContainer}>
                <button className={done && style.doneButton} onClick={() => { setDone(state => !state) }}>done</button>
                <button onClick={() => { dispatch(removeTodoItem(task.id)) }}>remove</button>
            </div>


        </div>
    )

}

export default TodoList