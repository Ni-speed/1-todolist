import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
    const shapka = 'what to learn'

    let [tasks, setTasks2] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])
    let [filter, setFilter] = useState<FilterValuesType>('all')

    const remuveTask = (id: number) => {
        let filteredTasks1 = tasks.filter(t => t.id !== id)
        setTasks2(filteredTasks1)
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }

    let filteredTasks = tasks
    if (filter === 'completed') {
        filteredTasks = tasks.filter(t => t.isDone === true)
    }
    if (filter === 'active') {
        filteredTasks = tasks.filter(t => t.isDone === false)
    }

    //  type filterButtonNameType = 'ALL'| 'Active'| 'Completed'
    //  let [tasks1, setTasks] = useState([
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false}
    // ])
    //
    // const removeTask = (taskID: number) => {
    //     // tasks1 = tasks1.filter( t => t.id !== taskID)
    //     //     setTasks(tasks1)
    //     setTasks(tasks1.filter( t => t.id !== taskID))
    // }

    // let[filterButtinName, setfilterButtinName] = useState<filterButtonNameType>('ALL')
    // let durhlag = tasks1
    // if (filterButtinName === 'Active') {
    //     durhlag = tasks1.filter(dr => !dr.isDone)
    // }
    // if (filterButtinName === 'Completed') {
    //     durhlag = tasks1.filter(dr => !dr.isDone)
    // }
    //
    // const filteredCurTasks = (buttonName: filterButtonNameType) => {
    // setfilterButtinName(buttonName)
    //     }

    return (
        <div className="App">
            <Todolist shapka={shapka}
                      tasks={filteredTasks}
                      remuveTask={remuveTask}
                      changeFilter={changeFilter}

            />

        </div>
    );
}

export default App;
