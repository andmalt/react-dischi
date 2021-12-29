import React, {useState,useEffect} from 'react'
import Loading from './conditionals/Loading'
import ErrorComponent from './conditionals/ErrorComponent'
import axios from 'axios'
import './Main.css'

const Main = () => {
    const [isLoading , setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [discs, setDiscs] = useState([])

    const url = 'https://flynn.boolean.careers/exercises/api/array/music';

    const getDiscs = async () =>{
        setIsLoading(true)
        try {
            const response = await axios.get(url)
            setDiscs(response.data.response)
            console.log(response.data.response);
        } catch (error) {
            setIsError(true)
            console.log(error);
        }
        setIsLoading(false)
        setIsError(false)
    }

    useEffect(() => {
        getDiscs();
    }, [])


    return (
        <div>
            
        </div>
    )
}

export default Main;
