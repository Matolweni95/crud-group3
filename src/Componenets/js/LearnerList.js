import React, { useEffect, useState } from 'react';
import '../css/LearnerList.css';
import { Link } from 'react-router-dom'
import { supabase } from './Supabase';


function LearnerList() {

    const [learners, setLearners] = useState([])

    useEffect(() => {
        async function fetchLearners() {
            try {
                const { data, error } = await supabase.from('Learner').select('*')

                if (error) {
                    console.log('error')
                }
                else {
                    setLearners(data)
                    console.log(learners)

                }
            } catch (error) {
                alert('failed to fetch the learners!')
            }
        }
        fetchLearners()

    }, [])
    const handleDeleteClick = async (id) => {
        try {
            const { data, error } = await supabase.from('Learner').delete().match({ 'LearnerID': id });
            if (!error) {
                console.log('Deleted');
                window.location.reload(); // Reload the page after successful deletion
            } else {
                console.error('Delete failed:', error);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className='LearnerList'>
            <h2>List of Learners:</h2>

            {learners.length !== 0 ? (
                learners.map((Learner, i) => {
                    return (
                        <div key={i}>
                            <div className='create-container'>
                                <div className='elements'>
                                    <div>
                                        <p>{Learner.Name}</p>
                                    </div>
                                    <div>
                                        <p>{Learner.Surname}</p>
                                    </div>
                                    <div className='icons'>
                                        <Link to='/teacher'>View</Link>
                                        <i onClick={() => handleDeleteClick(Learner.LearnerID)}>Delete</i>

                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div>
                    <br></br>
                    <p>No queries on this page</p>
                </div>
            )}

        </div>
    );
}

export default LearnerList;