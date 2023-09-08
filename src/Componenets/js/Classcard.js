import React from 'react';
import '../css/Classcard.css'
import { Link } from 'react-router-dom'

const Classcard = () => {
  return (
    <div className='classcard'>
      <div className='card'>
        <h1>Class 1</h1>
        <Link to='/LearnerList'><button className='card__btn'>See Class</button></Link>
      </div>

      <div className='card'>
        <h1>Class 1</h1>
        <Link to='/LearnerList'><button className='card__btn'>See Class</button></Link>
      </div>

      <div className='card'>
        <h1>Class 1</h1>
        <Link to='/LearnerList'><button className='card__btn'>See Class</button></Link>
      </div>


    </div>
  )
}

export default Classcard