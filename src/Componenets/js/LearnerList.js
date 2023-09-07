import React from 'react';
import '../css/LearnerList.css';
import { Link } from 'react-router-dom'

function LearnerList({ learners }) {
    const handleDeleteClick = (index) => {
        // You can implement the delete functionality here, e.g., by removing the learner from the list.
        // This is just a placeholder function.
        console.log(`Delete button clicked for learner at index ${index}`);
    };

    return (
        <div className='LearnerList'>
            <h2>List of Learners:</h2>

            <div className='elements'>
                <div> 
                    <p>Learner1</p>
                </div>
                <div className='icons'>
                    <Link to='/LearnerList'>View</Link>
                    <i onClick={() => handleDeleteClick()}>Delete</i>
                </div>


            </div>
        </div>
    );
}

export default LearnerList;