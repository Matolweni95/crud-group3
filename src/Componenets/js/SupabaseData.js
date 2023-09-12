import React from "react";
import supabase from "./Supabase";
import { useEffect, useState } from "react";
import DatabaseTable from "./DatabaseTable";
import "../css/Database.css";

const SupabaseData = () => {
  const [fetchError, setFetchError] = useState(null);
  const [group3, setGroup3] = useState([]);

  useEffect(() => {
    async function fetchGroup3() {
      const { data, error } = await supabase.from("Learner").select();

      if (error) {
        setFetchError("Could not fetch data");
        setGroup3([]);
        console.log(error);
      }
      if (data) {
        setGroup3(data);
        console.log(group3);
        setFetchError(null);
      }
    }

    fetchGroup3();
  }, []);

  return (
    <div className="centered-container">
      <div className="database_table">
        <div className="group3_list">
          {group3.length > 0 ? (
            <DatabaseTable data={group3} />
          ) : (
            <p>No group3 found</p>
          )}
        </div>
        {/* <h1>hello</h1> */}
      </div>
    </div>
  );
};

export default SupabaseData;
