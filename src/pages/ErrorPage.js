import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <div className='container w-20 mt-5 d-flex flex-column justify-content-center'>
            <h1>Error 404 - Page not found</h1>
            <h2>Something went wrong</h2>
        </div>
    </div>
  )
}

export default ErrorPage;