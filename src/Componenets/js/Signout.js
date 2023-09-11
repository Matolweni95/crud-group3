import React from 'react';
import '../css/Signout.css'

const Signout = () => {

  const handleSignOut = () => {
    localStorage.removeItem('isLoggedIn', 'true');
    window.location.reload();
  }
  return (
    <div className='signout'>
        <button onClick={handleSignOut} className='btn'>Signout</button>
    </div>
  )
}

export default Signout