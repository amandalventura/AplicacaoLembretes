import { Task } from "../Task"
import { BoxTasksContainer } from "./styles"

export function BoxTasks({tasks}) {
    return (
        <BoxTasksContainer>
        {tasks.map(section => {
            return (
                <div key={String(section.date)} className="tasksInfo">
                    <p>{new Intl.DateTimeFormat('pt-BR').format(new Date(section.date))}</p>
                    {section.tasks.map(task => <Task key={String(task.id)} data={task}/>)}
                </div>
            )
        })}
        </BoxTasksContainer>
    )
}