import { Link, useParams, useNavigate } from "react-router-dom";
import "../css/Teacher.css";
import React, { useState, useRef, useEffect } from "react";
import { supabase } from "./Supabase";

function Teacher() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mark, setMark] = useState("");
  const [formError, setFormError] = useState(null);

  //   const [markData, setMarkData] = useState('');
  //   const [marksList, setMarksList] = useState([]);
  //   const [editIndex, setEditIndex] = useState(null);
  //   const [markError, setMarkError] = useState(null);
  //   const formRef = useRef(null);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //      if(!markData){
  //       setMarkError('please enter a valid mark')
  //       return alert('enter valid mark')
  //      }

  //      const { data, error } = await supabase.from('Mark').insert([{ Mark: markData }]);
  //      console.log(data.Mark)

  // if(error){
  //   console.log(error)
  // }
  // if(data){
  //   console.log(data)
  //   setMarkError(null)
  // }

  //     let markValue = event.target.mark.value;
  //     setMarksList([...marksList, markValue]);
  //     formRef.current.reset();

  // };

  //   const handleChange = (newValue, index) => {
  //     const updatedValues = [...marksList];
  //     updatedValues[index] = newValue;
  //     setMarksList(updatedValues);
  //   };

  //   const handleEdit = (index) => {
  //     setEditIndex(index);
  //   };

  //updating mark, name and surname
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name || !surname || !mark) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("Learner")
      .update({ Name: name, Surname: surname, Marks: mark })
      .eq("LearnerID", id)
      .select();

    if (error) {
      setFormError("There is a problem loading to database.");
    }
    if (data) {
      setFormError(null);
    }
  };

  useEffect(() => {
    const fetchMarks = async () => {
      const { data, error } = await supabase
        .from("Learner")
        .select()
        .eq("LearnerID", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        setName(data.Name);
        setSurname(data.Surname);
        setMark(data.Marks);
      }
    };

    fetchMarks();
  }, [id, navigate]);

  return (
    <div class="container">
      {/* <div class="row">
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
    </div> */}

      <div className="page_create">
        <form onSubmit={handleUpdate}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="method"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />

          <label htmlFor="mark">Marks:</label>
          <input
            type="number"
            id="rating"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
            className="marks"
          />

          <button className="btn">Update Learner Details</button>

          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </div>
  );
}

export default Teacher;
