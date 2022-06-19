import Header from "./Header";

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Header />
      <div className="ui container" style={{ padding: "5% 20%" }}>
        <form class="ui form">
          <div class="field">
            <label>User Name</label>
            <input type="text" name="user-name" placeholder="User Name" />
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button class="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
