import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

export default function NotFoundPage() {
    return (<div className='not_found'>
                <p className="not_found_text">404 Not Found</p>
                <Link className="not_found_link" to="/"><button className="not_found_button">Back to RegistrationForm</button></Link>
            </div>
            )

}