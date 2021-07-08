import { FormCenter } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";

import { useHistory } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const newUser = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(newUser);
  const [_toggle, setToggle] = useState(false);

  const resetForm = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(signin(user, history));

    resetForm();
  };

  const toggle = () => (_toggle ? setToggle(false) : setToggle(true));

  return (
    <FormCenter onSubmit={handleSubmit}>
      <h3> Sign In</h3>
      <br />

      <div class="col-auto">
        <label class="sr-only" for="inlineFormInputGroup">
          Username
        </label>
        <div class="input-group ">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <input
            type="text"
            class="form-control"
            id="inlineFormInputGroup"
            placeholder="Username"
            name="username"
            //   value={product.name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label>password : </label>
        <input
          className="form-control"
          placeholder="Enter the Password"
          type={_toggle ? "string" : "password"}
          name="password"
          //   value={product.price}
          onChange={handleChange}
        />
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={() => toggle()}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          {_toggle ? "Hide Password" : "Show Password"}
        </label>
      </div>

      <br />
      <button type="submit" className="btn btn-primary" value="create">
        Sign In
      </button>
    </FormCenter>
  );
};

export default Signin;
