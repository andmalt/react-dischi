import React, {useState,useEffect} from 'react'
import Loading from './conditionals/Loading'
import ErrorComponent from './conditionals/ErrorComponent'
import CardDisk from './card/CardDisk'
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
            // console.log(response.data.response);
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

    if(isLoading){
        return <Loading /> ;
    }
    if(isError){
        return <ErrorComponent />
    }
    return (
        <>
            <div className="col-12">

            </div>

            <div className="col-12 p-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xxl-5 g-4">
                    {
                        discs.map((el,index)=>{
                            return <CardDisk key={index} {...el} />
                        })
                    }
                </div>
            </div> 
        </>
    )
}

export default Main;
