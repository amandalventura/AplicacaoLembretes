import { Circle, Trash, CheckCircle } from "@phosphor-icons/react";
import { TaskContainer } from "./styles";

export function Task ({data}){
    return (
        <TaskContainer>
        <button className={data.concluded==true ? "concluded":""}>
           {data.concluded==true ?<CheckCircle weight="fill" />:<Circle/>}
        </button>
        <p className={data.concluded==true ? "concluded":""}>{data.description}</p>
        <button>
           <Trash/>
        </button>
        
        </TaskContainer>
    )
}