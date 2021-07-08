import { Link } from "react-router-dom";
import { NavB, Logo, FlexStyle } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/authActions";

const NavBar = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  return (
    <NavB className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo exact to="/">
        <img
          src="https://i.pinimg.com/originals/c9/db/04/c9db04ca306f23d1db03820adc99862f.png"
          alt="logo"
        ></img>

        <h2>Body Flex Gym</h2>
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
    </NavB>
  );
};

export default NavBar;
