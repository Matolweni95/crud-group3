import React from 'react'
import '../css/Admin.css'

const Dashboard = () => {
  return (
    <div className='admin'>
       <div className='cards'>
            <div className='cards__container'>
                <h1>Number of users</h1>
                <h3>75</h3>
            </div>
            <div className='cards__container'>
                <h1>Number of Teacher</h1>
                <h3>75</h3>
            </div>
            <div className='cards__container'>
                <h1>Number of Learners</h1>
                <h3>75</h3>
            </div>
       </div>
    </div>
  )
}

export default Dashboard;