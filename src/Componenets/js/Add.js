import React, { useState } from 'react';
import '../css/Add.css'
import { supabase } from './Supabase';

function Add() {
  const initialState = {
    name: "",
    surname: "",
    marks: 0, 
  }

  const [learnerData, setLearnerData] = useState(initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const { name, surname, marks } = learnerData;

  
    if (!name || !surname || !marks) {
      return alert('Please enter valid learner details');
    }

    try {
      const { data, error } = await supabase.from('Learner').insert([
        {
          Name: name,
          Surname: surname,
          Marks: marks,
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
   /* <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">*/
    <div class="form">
      <div class="subtitle">Add learner mark</div>
      <form onSubmit={handleSubmit} id="learnerForm">
      <div class="input-container ic1">
        <input
          id='firstname'
          type="text"
          className= "input"
          placeholder=""
          value={learnerData.name}
          onChange={(e) => setLearnerData({ ...learnerData, name: e.target.value })}
        />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
              

              <label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={learnerData.surname}
                onChange={(e) => setLearnerData({ ...learnerData, surname: e.target.value })}
              />
              <span>Lastname:</span>
              </label>

              <label>
              <input
                type="text"
                className="form-control"
                placeholder=" "
                value={learnerData.marks}
                onChange={(e) => setLearnerData({ ...learnerData, marks: parseInt(e.target.value) })}
              />
              <span>Mark:</span>
              </label>
            </div>
            <div className="Buttons">
              <button type="submit" className="btn btn-outline-primary mx-2">
               Add
              </button>
            </div>
          </form>
        </div>
  );
};

export default Add;
