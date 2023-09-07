import { Link } from 'react-router-dom';
import '../css/Teacher.css'

import React from 'react'

function Teacher() {
  return (
    <div className="container">
    <div className="row">
             <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                 <h2>ADD MARKS</h2>
                 <form>
                     <div className="mb-3">
                         <input
                             type="text"
                             className="form-control"
                             placeholder="Enter marks"
                             name="question"
                          
                         />
                     </div>
                     <button type="submit" className="btn btn-outline-primary mx-2">submit</button>
                     <Link to={"/"} className="btn btn-outline-primary mx-2">cancel</Link>
                 </form>
             </div>
         </div>

         <div className="row mt-4">
             <div className="col-md-6 offset-md-3 border rounded p-4 shadow">
                 <h2>Learners</h2>
                 <table className="table">
                     <thead>
                         <tr>
                             <th>Learners</th>
                             <th>Marks</th>
                             <th>Delete</th>
                         </tr>
                     </thead>
                     <tbody>
                             <tr> 
                                 <td></td>
                                 <td>

                                    
                                 </td>
                                 <td>
                 
                                         
                                 </td>
                             </tr>
                             <button
                                         className="btn btn-outline-primary">edit
                             </button>
                     </tbody>
                 </table>
             </div>
         </div> 
   
 </div>
  )
}

export default Teacher
