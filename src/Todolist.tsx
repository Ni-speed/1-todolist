import React, {useState} from "react";
import {FilterValuesType} from "./App";


export type TodolistPropsType = {
    shapka?: string;
    tasks: TaskType[]
    remuveTask: (id: number) => void
    changeFilter: (value: FilterValuesType) => void


}
export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;

}
export const Todolist = (props: TodolistPropsType) => {
       return (
        <div>
            <h3>{props.shapka}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el, index) => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => props.remuveTask(el.id)}>x</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>

                        </li>

                    )
                })}
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter('all')
                }}>All
                </button>
                <button onClick={() => {
                    props.changeFilter('active')
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter('completed')
                }}>Completed
                </button>
            </div>
        </div>
    )
}
/*
export default Todolist;*/
