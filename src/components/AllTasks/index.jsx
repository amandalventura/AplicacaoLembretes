import { useState } from "react"
import { EmptyTasks } from "../EmptyTasks"
import { AllTasksContainer } from "./styles"

export function AllTasks () {
    const [createdTasks,setCreatedTasks] = useState(0)
    const [concludedTasks,setConcludedTasks] = useState(0)
    return (
        <AllTasksContainer>
        <div className="info">
            <h2 className="created">Tarefas criadas <span>{createdTasks}</span> </h2>
            <h2 className="concluded">Tarefas concluídas <span>{concludedTasks}</span> </h2>
        </div>

        <EmptyTasks/>
        </AllTasksContainer>
    )
}