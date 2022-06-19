import { useState } from "react";
import axios from "axios";

import Header from "./Header";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const submitHandler = async (e) => {
    setError(false);
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3004/users", {
        username: username,
        email: email,
        password: password,
      });
      // res.data && window.location.replace("/login");
      // console.log(res.status);
      res.status === 201 && window.location.replace("/account");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <Header />
      <div className="ui container" style={{ padding: "5% 20%" }}>
        <form className="ui form" onSubmit={submitHandler}>
          <div className="field">
            <label>User Name</label>
            <input
              type="text"
              name="user-name"
              placeholder="User Name"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" tabIndex="0" required />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
