import { PlusCircle } from '@phosphor-icons/react'
import {  TaskContainer } from './styles'

export function CreateTasks() {
    return (
        <TaskContainer>
       <label>  
            <input name='Lembrete' placeholder="Adicionar um novo lembrete" type="text"/>
       </label>

       <label>  
            <input name='Data' title='Insira a data' placeholder="01/01/2000" type="text"/>
       </label>

       <button>Criar <PlusCircle weight='bold'/></button>
        </TaskContainer>
    )
}