//component
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Signup from "./components/usersComponents/Signup";
import Signin from "./components/usersComponents/Signin";
import SignupOwner from "./components/usersComponents/SignupOwner";

//
import { Route, Switch } from "react-router";
import CreatGym from "./components/CreatGym";
import CreatClass from "./components/CreatClass";
import ClassList from "./components/classComponent/ClassList";

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/signup/owner">
          <SignupOwner />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/classes">
          <ClassList />
        </Route>

        <Route path="/create/class">
          <CreatClass />
        </Route>

        <Route path="/create/gym">
          <CreatGym />
        </Route>
      </Switch>
    </>
  );
}

export default App;
