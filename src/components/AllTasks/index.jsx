import { useState } from "react"
import { BoxTasks } from "../BoxTasks"
import { EmptyTasks } from "../EmptyTasks"
import { AllTasksContainer } from "./styles"

export function AllTasks () {
    const [createdTasks,setCreatedTasks] = useState(1)
    const [concludedTasks,setConcludedTasks] = useState(0)
const tasks = [
    {
        "date": "2023-09-11T00:00:00.000+00:00",
        "tasks": [
            {
                "id": 4,
                "description": "Finalizar FRONT",
                "concluded": true
            },
            {
                "id": 5,
                "description": "Finalizar CSS",
                "concluded": false
            },
            {
                "id": 6,
                "description": "Finalizar JS",
                "concluded": false
            }
        ]
    },
    {
        "date": "2023-09-10T00:00:00.000+00:00",
        "tasks": [
            {
                "id": 1,
                "description": "Finalizar Aplicacao",
                "concluded": false
            },
            {
                "id": 2,
                "description": "Finalizar JAVA",
                "concluded": false
            },
            {
                "id": 3,
                "description": "Finalizar SPRING",
                "concluded": false
            }
        ]
    },
    {
        "date": "2023-09-13T00:00:00.000+00:00",
        "tasks": [
            {
                "id": 7,
                "description": "Finalizar LAYOUT",
                "concluded": false
            },
            {
                "id": 8,
                "description": "Finalizar FIGMA",
                "concluded": false
            }
        ]
    }
]    
    return (
        <AllTasksContainer>
        <div className="info">
            <h2 className="created">Tarefas criadas <span>{createdTasks}</span> </h2>
            <h2 className="concluded">Tarefas concluídas <span>{concludedTasks}</span> </h2>
        </div>
        {createdTasks > 0 ?<BoxTasks tasks={tasks}/>:<EmptyTasks/>} 

        </AllTasksContainer>
    )
}