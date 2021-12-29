import React from 'react'
import './ErrorComponent.css'

const ErrorComponent = () => {
    return (
        <div className='conatiner-fluid'>
            <div className='row justify-content-center align-items-center error-pg'>
                <div className="col-12 col-md-8 col-lg-4 text-center">
                    <h2 className='text-light mb-4'><strong>Ops!!! c'è un errore...</strong></h2>
                    <div className='d-flex justify-content-center'>
                        <img className='rounded-pill shadow-lg' src="https://64.media.tumblr.com/5e753bcfb283f7cd9411c1eb59a57dfb/tumblr_ojrcnupyC31tr842yo2_r1_500.gifv" alt="explosion img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorComponent;
