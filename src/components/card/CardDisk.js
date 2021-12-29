import React from 'react'
import './CardDisk.css'

const CardDisk = ({author,genre,poster,title,year}) => {
    return (
        <div className='col'>
            <div className="card shadow card_cc">
                <div className="img p-2">
                    <img src={poster} className="card-img-top rounded" alt={`${title} img`} />
                </div>
                <div className="card-body body_c">
                    <h4 className="card-title text-light">{title}</h4>
                    <p className="card-text text-light"><strong>{author}</strong></p>
                    <p className="card-text text-light">{genre}</p>
                    <p className="card-text"><small className="text-muted">{year}</small></p>
                </div>
            </div>
        </div>
    )
}

export default CardDisk
