import { CreateTasks } from "../../components/CreateTasks";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";

export function Home () {
    return (
        <HomeContainer>
            <Header/>
        <CreateTasks/>
        </HomeContainer>
    )
} 
