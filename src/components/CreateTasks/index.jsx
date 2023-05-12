import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import {  TaskContainer } from './styles'
import axios from 'axios'

export function CreateTasks({updateTasks}) {
    const [description, setDescription] = useState("") 
    const [date, setDate] = useState("") 

    function handleChangeInput(e,setInput) {
        setInput(e.target.value)
    }

    async function handleSubmit() {
        if (description.length==0){
            return alert("Por favor, digite a tarefa.")
        }

        try {
            axios.post('http://localhost:8080/task', {
                description,
                date,
                concluded:false
            })
            alert('Task criada com sucesso')

            updateTasks()

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <TaskContainer>
       <label>  
            <input onChange={(e) => handleChangeInput(e,setDescription)} name='Lembrete' value={description} placeholder="Adicionar um novo lembrete" type="text"/>
       </label>

       <label>  
            <input onChange={(e) => handleChangeInput(e,setDate)} name='Data' value={date} title='Insira a data' placeholder="01/01/2000" type="date"/>
       </label>

       <button onClick={handleSubmit} type='button'>Criar <PlusCircle weight='bold'/></button>
        </TaskContainer>
    )
}