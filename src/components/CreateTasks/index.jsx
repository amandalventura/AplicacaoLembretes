import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import {  TaskContainer } from './styles'

export function CreateTasks() {
    const [title, setTitle] = useState("") 
    const [data, setData] = useState("") 

    function handleChangeInput(e,setInput) {
        setInput(e.target.value)
    }
    function handleSubmit() {
        if (title.length==0){
            return alert("Por favor, digite a tarefa.")
        }
        console.log(title,data)
    }
    return (
        <TaskContainer>
       <label>  
            <input onChange={(e) => handleChangeInput(e,setTitle)} name='Lembrete' value={title} placeholder="Adicionar um novo lembrete" type="text"/>
       </label>

       <label>  
            <input onChange={(e) => handleChangeInput(e,setData)} name='Data' value={data} title='Insira a data' placeholder="01/01/2000" type="date"/>
       </label>

       <button onClick={handleSubmit} type='button'>Criar <PlusCircle weight='bold'/></button>
        </TaskContainer>
    )
}