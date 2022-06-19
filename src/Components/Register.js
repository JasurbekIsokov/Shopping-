import Header from "./Header";

const Register = () => {
  return (
    <>
      <Header />
      <div className="ui container" style={{ padding: "5% 20%" }}>
        <form class="ui form">
          <div class="field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
          </div>
          <div class="field">
            <label>User Name</label>
            <input type="text" name="user-name" placeholder="User Name" />
          </div>
          <div class="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button class="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
