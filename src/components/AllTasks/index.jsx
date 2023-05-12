import { BoxTasks } from "../BoxTasks"
import { EmptyTasks } from "../EmptyTasks"
import { AllTasksContainer } from "./styles"

export function AllTasks ({tasks, createdTasks}) {



    return (
        <AllTasksContainer>
        <div className="info">
            <h2 className="created">Tarefas criadas <span>{createdTasks.length}</span> </h2>
        </div>
        {createdTasks.length > 0 ?<BoxTasks tasks={tasks} updateTasks={updateTasks}/>:<EmptyTasks/>} 

        </AllTasksContainer>
    )
}