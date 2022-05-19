import React from "react";
import { toast } from "react-hot-toast";

const AddTask = () => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const list = { name, description };
    fetch("/list", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Task Added Successfully");
          e.target.reset();
        }
      });
  };

  return (
    <div className="pt-20">
      <div className="login-container">
        <form onSubmit={handleAddTask} className="login-form">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Task Name"
            required
          />
          <textarea
            className="w-full p-4 outline-0"
            name="description"
            placeholder="Enter Your Task Description"
            required
          />
          <input
            type="submit"
            value="Add Task"
            className="font-bold btn btn-success"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
