import imgEmpty from '../../assets/empty.svg'
import { EmptyContainer } from './style'

export function EmptyTasks() {
    return (
        <EmptyContainer>
        <img src={imgEmpty} alt="clipboard" />
        <p className='msg'>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
        </EmptyContainer>
    )
}