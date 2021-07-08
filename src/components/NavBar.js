import { Link } from "react-router-dom";
import { NavB, Logo, FlexStyle } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/authActions";
import '../App.css';

const NavBar = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  return (
    <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="navbar-inner"></div>
      <Logo exact to="/">
        <img
          src="https://previews.123rf.com/images/subtropica/subtropica1704/subtropica170400023/75345207-train-hard-or-go-home-inspiring-workout-and-fitness-gym-motivation-quote-illustration-sign-.jpg"
          alt="logo"
          className="bb"
        ></img>

        <h2 className="tt">Body Flex Gym</h2>
        
      </Logo>

      <div>
        {user ? (
          <FlexStyle>
            <h3 style={{ padding: "10px" }}>Hello {user.username} </h3>
            <button
              style={{ margin: "10px" }}
              type="button"
              class="btn btn-secondary"
              onClick={() => dispatch(logout())}
            >
              Sign Out
            </button>
          </FlexStyle>
        ) : (
          <>
            <Link to="/signin">
              <button
                style={{ margin: "10px" }}
                type="button"
                class="btn btn-secondary"
              >
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button
                style={{ margin: "10px" }}
                type="button"
                class="btn btn-secondary"
              >
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
      </div>
    
  );
};

export default NavBar;
