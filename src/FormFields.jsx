import React, { useState } from 'react'
import style from './FormFields.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTodoItem } from './TodoSlice'

function FormFields() {
    const [task, setTask] = useState('')
    const todo = useSelector((state) => state.todo.todoList)
    const dispatch = useDispatch()

    const taskChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const addItemHandler = (event) => {
        event.preventDefault()
        dispatch(addTodoItem(task))
        setTask("")
    }

    return (
        <form className={style.FormFields}>
            <label htmlFor="task">Activity</label>
            <div>
                <input value={task} onChange={taskChangeHandler} type="text" id='task' />
                <button id={style.add} disabled={task == "" ? true : false} type='submit' onClick={addItemHandler}>+</button>
            </div>
        </form>
    )
}

export default FormFields