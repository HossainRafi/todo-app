import React from "react";
import { toast } from "react-hot-toast";

const TaskRow = ({ list, index }) => {
  const { name, description, _id, finished } = list;
  const handleFinished = (id) => {
    fetch(`https://sheltered-oasis-12618.herokuapp.com/list/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Task Finished");
        }
      });
  };
  const handleDelete = (id) => {
    fetch(`https://sheltered-oasis-12618.herokuapp.com/list/${id}`, {
      method: "delete",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Deleted Successfully");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td className={finished ? " line-through" : ""}>{description}</td>
      <td>
        <button onClick={() => handleFinished(_id)} className="btn btn-sm">
          Finished
        </button>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;
