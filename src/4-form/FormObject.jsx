import React, { useState } from "react";

const FormObject = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = info;

  const handleInfo = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
    console.log(e);
  };

  const sendToDatabase = (e) => {
    e.preventDefault();
    alert(`
        name : ${name}
        password : ${password}
        email : ${email}
    `);
    setInfo({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h1>*********************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form onSubmit={sendToDatabase}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name: <span className="text-danger">{} </span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            onChange={handleInfo}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email: <span className="text-danger">{} </span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            onChange={handleInfo}
            value={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: <span className="text-danger">{} </span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            onChange={handleInfo}
            value={password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormObject;
