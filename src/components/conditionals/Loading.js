import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div className='conatiner-fluid'>
            <div className='row justify-content-center align-items-center loading-pg'>
                <div className="col-12 col-md-8 col-lg-4 text-center">
                    <h2 className='text-light mb-4'>Caricamento...</h2>
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-warning p-5" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;
