import React from 'react';
import './notFound.scss'
function NotFound() {
let image=""
  return (
    <div className='notFound'>
    <img className='notFound__content-icon' src={process.env.PUBLIC_URL+'/images/app-resources/not-found.gif'} />
    <div className="notFound__content-text">
        <h2>This page could not be found</h2>
    </div>
</div >
   
  );
}


export default NotFound;