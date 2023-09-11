import React from "react";
import "../css/Database.css"; // Import your CSS file

const DatabaseTable = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Student No</th>

          <th>Full Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((Learner) => (
          <tr key={Learner.id}>
            <td>{Learner.Name}</td>
            <td>{Learner.Surname}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DatabaseTable;
