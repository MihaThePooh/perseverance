import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")

    function addTask() {
        props.addTask(title)
        setTitle("")
    }

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }

    function onKeyPressHandler(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            addTask()
        }
    }

    function onAllClickHandler() {
        props.changeFilter("all")
    }

    function onActiveClickHandler() {
        props.changeFilter("active")
    }

    function onCompletedClickHandler() {
        props.changeFilter("completed")
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onKeyPress={onKeyPressHandler}
                   onChange={onChangeHandler}/>
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map((t) => {
                    function onClickHandler() {
                        props.removeTask(t.id)
                    }
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onClickHandler}>x</button>
                        </li>)
                })
            }
        </ul>
        <div>
            <button onClick={onAllClickHandler}>
                All
            </button>
            <button onClick={onActiveClickHandler}>
                Active
            </button>
            <button onClick={onCompletedClickHandler}>
                Completed
            </button>
        </div>
    </div>
}
