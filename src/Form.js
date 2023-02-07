import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const inputHandler = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData((prev) => {
      return { ...prev, [fieldName]: fieldValue };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    navigate("/userdata", {
      state: {
        formData,
      },
    });
    setFormData({});
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={inputHandler}
        />

        <label htmlFor="email">Email :</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={inputHandler}
        />

        <label htmlFor="age">Age :</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={inputHandler}
        />

        <label htmlFor="email">Gender :</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={inputHandler}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
