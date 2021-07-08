//styling
import { Center, Image, Center2 } from "../styles";
//
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import '../App.css';
import 'react-slideshow-image/dist/styles.css'
//components
import Admin from "./Admin";
import Owner from "./Owner";
import Member from "./Member";
import Coach from "./Coach";

const slideImages = [
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
  'https://i.pinimg.com/originals/57/42/86/574286fe18f68a4ce3052f7e5164ba14.jpg',
];


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

          <Center2>
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
    
        </Center>
      )}
    </>
  );
};

export default Home;
