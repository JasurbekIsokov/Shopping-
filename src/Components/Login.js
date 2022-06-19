import { useState } from "react";
import axios from "axios";
import { notification } from "antd";
import Header from "./Header";

const Login = () => {
  const [testUserName, setTestUserName] = useState();
  const [testPassword, setTestPassword] = useState();

  const openErrorMessage = (text) => {
    notification.error({
      message: `${text}`,
      placement: "top",
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let isHave = false;
      const res = await axios.get("http://localhost:3004/users");
      console.log(res.data, testUserName, testPassword);

      res.data.forEach(function (val) {
        if (val.username === testUserName && val.password === testPassword) {
          isHave = true;
          window.location.replace("/account");
        }
      });
      if (!isHave) openErrorMessage("User Name or Password Error!");
    } catch (err) {
      console.log(err.message);
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
              onChange={(e) => setTestUserName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => setTestPassword(e.target.value)}
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
