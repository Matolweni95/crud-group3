import React, { useState } from 'react';
import '../css/Add.css'
import { supabase } from './Supabase';

function Add() {
  const initialState = {
    name: "",
    surname: "",
    marks: 0, 
    id:0,
  }

  const [learnerData, setLearnerData] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const { name, surname, marks,id } = learnerData;

  
    if (!name || !surname || isNaN(marks) || !id) {
      return alert('Please enter valid learner details');
    }

    try {
      const { data, error } = await supabase.from('Class_List').insert([
        {
          Name: name,
          Surname: surname,
          Marks: marks,
          ClassID: id,
        },
      ]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
        
        setLearnerData(initialState);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
 }
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2>ADD LEARNER DETAILS</h2>
          <form onSubmit={handleSubmit} id="learnerForm">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={learnerData.name}
                onChange={(e) => setLearnerData({ ...learnerData, name: e.target.value })}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Enter surname"
                value={learnerData.surname}
                onChange={(e) => setLearnerData({ ...learnerData, surname: e.target.value })}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Add Mark"
                value={learnerData.marks}
                onChange={(e) => setLearnerData({ ...learnerData, marks: parseInt(e.target.value) })}
              />
              <input
                type="number"
                className="form-control"
                placeholder="Add class"
                value={learnerData.id}
                onChange={(e) => setLearnerData({ ...learnerData, id: parseInt(e.target.value) })}
              />
            </div>
            <div className="Buttons">
              <button type="submit" className="btn btn-outline-primary mx-2">
               submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
