import { Circle, Trash, CheckCircle } from "@phosphor-icons/react";
import { TaskContainer } from "./styles";
import axios from "axios";
import { useState } from "react";

export function Task ({data, date}){
    const [concluded,setConcluded] = useState(data.concluded)

    async function handleConcludedTask(){
        try {
            await axios.put(`http://localhost:8080/task/${data.id}`,{
                description: data.description,
                date: date,
                concluded: !data.concluded
            })

            setConcluded(!concluded)
            alert('Lembrete atualizado')

        } catch (error) {
            console.log(error)
        }
 
    }
    async function deleteTask(){
        try {
            await axios.delete(`http://localhost:8080/task/${data.id}`)
            alert('Lembrete deletado com sucesso')

        } catch (error) {
            console.log(error)
            
        }
    }
    return (
        <TaskContainer>
        <button 
            className={concluded == true ? "concluded":""}
            onClick={handleConcludedTask}    
        >
           {concluded == true ?<CheckCircle weight="fill" />:<Circle/>}
        </button>
        <p className={concluded == true ? "concluded":""}>{data.description}</p>
        <button onClick={deleteTask}>
           <Trash/>
        </button>
        
        </TaskContainer>
    )
}