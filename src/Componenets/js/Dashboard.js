import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { supabase } from "./Supabase";
import "../css/Admin.css";

const Dashboard = () => {
  const [responseData, setResponseData] = useState([]);
  const [users, setUsers] = useState([]);
  const [classTwo, setClassTwo] = useState([]);
  const [classThree, setClassThree] = useState([]);

  useEffect(() => {
    // Fetch data from the Supabase "Learner" table
    async function fetchData() {
      try {
        const { data, error } = await supabase.from("Class").select("*");

        if (error) {
          console.error("Error while fetching the data:", error.message);
        } else {
          setResponseData(data || []);
        }
      } catch (error) {
        console.error("Error while fetching the data:", error.message);
      }
    }

    async function fetchClassTwo() {
      try {
        const { data, error } = await supabase.from("Class2").select("*");

        if (error) {
          console.error("Error while fetching the data:", error.message);
        } else {
          setClassTwo(data || []);
        }
      } catch (error) {
        console.error("Error while fetching the data:", error.message);
      }
    }

    async function fetcClassThree() {
      try {
        const { data, error } = await supabase.from("Class3").select("*");
        if (error) {
          console.error("Error while fetching the data:", error.message);
        } else {
          setClassThree(data || []);
        }
      } catch (error) {
        console.error("Error while fetching the data:", error.message);
      }
    }

    async function fetchUsers() {
      try {
        const { data, error } = await supabase.from("User").select("*");

        if (error) {
          console.error("Error while fetching the data:", error.message);
        } else {
          setUsers(data || []);
        }
      } catch (error) {
        console.error("Error while fetching the data:", error.message);
      }
    }

    fetchData();
    fetchUsers();
    fetchClassTwo();
    fetcClassThree();
  }, []);

  // const countResponse = () => {
  //   const counts = {
  //     Name: 0,
  //     Surname: 0,
  //     Marks: 0,
  //   };

  //   if (Array.isArray(responseData)) {
  //     responseData.forEach((learner) => {
  //       if (learner.responses) {
  //         learner.responses.forEach((value) => {
  //           if (value === "Name") {
  //             counts.Learner += 1;
  //           } else if (value === "Surname") {
  //             counts.Class += 1;
  //           } else if (value === "Marks") {
  //             counts.Teacher += 1;
  //           }
  //         });
  //       }
  //     });
  //   }

  //   return counts;
  // };

  // const responseCounts = countResponse();

  return (
    <div className="admin">
      <h1>Number of users</h1>

      <table>
        <tbody className="">
          <div className="cards">
            <tr>
              <div>
                <td>
                  <h2>
                    Maths Students <br />
                    {responseData.length}{" "}
                  </h2>
                </td>
              </div>
            </tr>
            <tr>
              <div>
                <td>
                  <h2>
                    {" "}
                    Physics Students <br />
                    {classTwo.length}{" "}
                  </h2>
                </td>
              </div>
            </tr>
            <tr>
              <div>
                <td>
                  <h2>
                    English Students
                    <br />
                    {classThree.length}{" "}
                  </h2>
                </td>
              </div>
            </tr>
            <tr>
              <div>
                <td>
                  <h2>
                    Number of Users
                    <br />
                    {users.length}{" "}
                  </h2>
                </td>
              </div>
            </tr>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
