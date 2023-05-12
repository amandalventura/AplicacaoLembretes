import { Task } from "../Task"
import { BoxTasksContainer } from "./styles"

export function BoxTasks({tasks}) {

    function adicionarUmDia(data) {
        const dataAtual = new Date(data);
        dataAtual.setDate(dataAtual.getDate() + 1);
        return new Intl.DateTimeFormat('pt-BR').format(dataAtual);
      }
    return (
        <BoxTasksContainer>
        {tasks.map(section => {
            return (
                <div key={String(section.date)} className="tasksInfo">
                    <p>{adicionarUmDia(section.date)}</p>
                    {section.tasks.map(task => <Task key={String(task.id)} data={task} date={section.date} />)}
                </div>
            )
        })}
        </BoxTasksContainer>
    )
}