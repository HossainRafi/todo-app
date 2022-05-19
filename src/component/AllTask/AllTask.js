import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import TaskRow from "../TaskRow/TaskRow";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";

const AllTask = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-oasis-12618.herokuapp.com/list")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, [lists]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Task Name</th>
              <th>Task Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list, index) => (
              <TaskRow key={list._id} list={list} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
