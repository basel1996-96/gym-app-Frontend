import { FormCenter,Center2, GlobalStyle1 } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";

import { useHistory } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import '../../App.css';
import 'react-slideshow-image/dist/styles.css'

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
  const slideImages = [
'https://www.crossfit.com/wp-content/uploads/2020/10/19092755/2018072814475780_ND_ND5_6593-1-copy-2048x1152.jpg',
    'https://ak.picdn.net/shutterstock/videos/12028625/thumb/1.jpg',
    'https://www.paulinefraser.co.uk/images/made/uploads/20181005_ASV_SPIN_CLASS_023_690_461_tl_80_s_c1.png',
  ];
  

  return (
    
    <Center2>
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

     
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[0]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[1]})`}}>
             
            </div>
          </div>
          <div className="each-slide">
            <div className="image" style={{'backgroundImage': `url(${slideImages[2]})`}}>
             
            </div>
           
          </div>
        </Slide>
      </div>
      
    
    </Center2>
    
  );
};

export default Signin;
