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
    const [genre, setGenre] = useState('')
    const [genreDiscs, setGenreDiscs] = useState([])

    const url = 'https://flynn.boolean.careers/exercises/api/array/music';

    const getDiscs = async () =>{
        setIsLoading(true)
        try {
            const response = await axios.get(url)
            setDiscs(response.data.response)
            // console.log(response.data.response) 
        } catch (error) {
            setIsError(true)
            console.log(error);
        }
        setIsLoading(false)
        setIsError(false)
    }
    const getGenre = () => {
        const allGenre = [...new Set(discs.map(el => el.genre))]
        // console.log(allGenre);
        setGenre(allGenre) 
    }

    const getGenreDisc = (genre) =>{
        let newGenre = discs.filter(el => el.genre === genre )
        setGenreDiscs(newGenre)
    }

    const getAll = () =>{
        let getAllDiscs = [...discs]
        setGenreDiscs(getAllDiscs)     
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
            <div className="col-12 m-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 col-lg-3">
                        <select onMouseOver={getGenre} className='form-select'>
                            <option onClick={getAll} >Seleziona tutti i generi</option>
                            {   
                            genre.length > 0 ?
                                genre.map(el =>{
                                    return <option key={el} onClick={() => getGenreDisc(el)} value={el}>{el}</option> 
                                })
                                :
                                ''
                            }
                        </select>
                    </div>
                </div>
            </div>

            <div className="col-12 p-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xxl-5 g-4">
                    {
                        genreDiscs.length > 0 ?
                            genreDiscs.map((el,index)=>{
                            return <CardDisk key={index} {...el} />
                            })
                            :
                            discs.map((el, index) => {
                                return <CardDisk key={index} {...el} />
                            })    
                    }
                </div>
            </div> 
        </>
    )
}

export default Main;
