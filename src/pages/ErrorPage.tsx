import React from 'react';
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import '../styles/newStyle.css'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='error'>
            <div className='error-box'>
                <h1>Oops!</h1>
                <p>Что-то пошло не так</p>
                {
                    isRouteErrorResponse(error) ? (
                        <div>
                            {error.status} | {error.statusText}
                        </div>
                    ):(
                        <div>Не знаю</div>
                    )
                }
            </div>

            </div>
    );
};

export default ErrorPage;