import { useEffect, useState } from "react";
import { AllTasks } from "../../components/AllTasks";
import { CreateTasks } from "../../components/CreateTasks";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";
import axios from "axios";

export function Home () {
    const [createdTasks,setCreatedTasks] = useState([])
    const [tasks,setTasks] = useState([])

    function updateTasks(){
        getData()
    }

    async function getData(){
        const response = await axios.get('http://localhost:8080/task')
        const response2 = await axios.get('http://localhost:8080/task/')

        setCreatedTasks(response2.data)
        setTasks(response.data)
        console.log('oi')
    }
    useEffect(() => {
        getData()
    },[])
    return (
        <HomeContainer>
            <Header/>
            <CreateTasks updateTasks={updateTasks}/>
            <AllTasks tasks={tasks} createdTasks={createdTasks} />
        </HomeContainer>
    )
} 
