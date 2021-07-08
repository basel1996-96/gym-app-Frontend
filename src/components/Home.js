//styling
import { Center, Image } from "../styles";
//
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import Admin from "./Admin";
import Owner from "./Owner";
import Member from "./Member";
import Coach from "./Coach";

const Home = () => {
  const user = useSelector((state) => state.authReducer.user);

  function SwitchCase() {
    switch (user.type) {
      case "admin":
        return <Admin />;
      case "owner":
        return <Owner />;
      case "member":
        return <Member />;
      case "coach":
        return <Coach />;
      default:
        return;
    }
  }

  return (
    <>
      {user ? (
        <SwitchCase />
      ) : (
        <Center>
          <h1>Body Flex Gym</h1>

          <Link to="/classes">
            <button
              style={{ margin: "10px" }}
              type="button"
              class="btn btn-secondary"
            >
              Check Our Classes
            </button>
          </Link>

          <Image
            src="https://i.pinimg.com/originals/c9/db/04/c9db04ca306f23d1db03820adc99862f.png"
            alt="logo"
          />
        </Center>
      )}
    </>
  );
};

export default Home;
