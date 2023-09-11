import { Link } from 'react-router-dom';
import '../css/Teacher.css'
import React, { useState,useRef  } from 'react';
import { supabase } from './Supabase';


function Teacher() {
  
  const [markData, setMarkData] = useState('');
  const [marksList, setMarksList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [markError, setMarkError] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

     if(!markData){
      setMarkError('please enter a valid mark')
      return alert('enter valid mark')
     }

     const { data, error } = await supabase.from('Mark').insert([{ Mark: markData }]);
     


if(error){
  console.log(error)
}
if(data){
  console.log(data)
  setMarkError(null)
}


    let markValue = event.target.mark.value;
    setMarksList([...marksList, markValue]);
    formRef.current.reset();
   
};



  const handleChange = (newValue, index) => {
    const updatedValues = [...marksList];
    updatedValues[index] = newValue;
    setMarksList(updatedValues);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };
  return (
    <div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2>MARK</h2>
            <form onSubmit={handleSubmit} id="markForm" ref={formRef}>
                <div class="mb-3">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Add Mark"
                        id="mark"
                        value={markData}
                        onChange={(e)=>setMarkData(e.target.value)}
                      
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
                  <td>  <input
            type="text"
            value={marksList[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            disabled={index !== editIndex} 
            className='markInput'
          /> 
        
           </td>
                  <td>     {index === editIndex ? (
            <button onClick={() => setEditIndex(null)} className='editBtn'>Save</button>
          ) : (
            <button onClick={() => handleEdit(index)}  className='editBtn'>Edit</button>
          )}</td>
                 
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
