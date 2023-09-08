import { Link } from 'react-router-dom';
import '../css/Teacher.css'
import React, { useState } from 'react';

function Teacher() {
  const initialState = {
    marks: "",
  };

  const [markData, setMarkData] = useState(initialState);
  const [marksList, setMarksList] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const markValue = event.target.mark.value;


    setMarksList([...marksList, markValue]);

    console.log("Mark added:", markValue);
  };

  return (
    <div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2>MARK</h2>
            <form onSubmit={handleSubmit} id="markForm">
                <div class="mb-3">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Add Mark"
                        id="mark"
                    />
                </div>
                <div class="Buttons">
                    <button type="submit" class="btn btn-outline-primary mx-2">
                        ADD
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-6 offset-md-3 border rounded p-4 shadow">
            <h2>Class 1 Learners</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Learners</th>
                        <th>Marks</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="marksList">
                {marksList.map((mark, index) => (
                <tr key={index}>
                  <td>Learner {index + 1}</td>
                  <td>{mark}</td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
                </tbody>
            </table>
        </div>
    </div>
</div>
  );
}

export default Teacher;
