//not using this now

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FormData.css";

// const FormData = (props) => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("Male");

//   const nameHandler = (event) => {
//     setName(event.target.value);
//   };
//   const emailHandler = (event) => {
//     console.log(event.target.value);
//     setEmail(event.target.value);
//   };
//   const ageHandler = (event) => {
//     console.log(event.target.value);
//     setAge(event.target.value);
//   };
//   const genderHandler = (event) => {
//     console.log(event.target.value);
//     setGender(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     //not using it now
//     // props.set(() => {
//     //   return {
//     //     name,
//     //     email,
//     //     age,
//     //     gender,
//     //   };
//     // });
//     navigate("/userdata", {
//       state: {
//         name,
//         email,
//         age,
//         gender,
//       },
//     });
//   };

//   return (
//     <>
//       <form onSubmit={submitHandler} className="form">
//         <label htmlFor="name">name</label>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           placeholder="Enter your name"
//           onChange={nameHandler}
//         />
//         <br></br>
//         <label htmlFor="email">email</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           placeholder="Enter your Email"
//           onChange={emailHandler}
//         />
//         <br></br>

//         <label htmlFor="age">age</label>
//         <input
//           type="number"
//           name="age"
//           value={age}
//           placeholder="Enter your age"
//           onChange={ageHandler}
//         />
//         <br></br>

//         <label htmlFor="gender">gender : </label>
//         <select name="gender" onChange={genderHandler}>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         <br></br>

//         <button type="submit">submit</button>
//       </form>
//     </>
//   );
// };

// export default FormData;
