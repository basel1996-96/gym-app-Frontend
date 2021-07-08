//component
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Signup from "./components/usersComponents/Signup";
import Signin from "./components/usersComponents/Signin";
import SignupOwner from "./components/usersComponents/SignupOwner";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

//
import { Route, Switch } from "react-router";
import CreatGym from "./components/CreatGym";
import CreatClass from "./components/CreatClass";
import ClassList from "./components/classComponent/ClassList";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const sw = () => {
    setCounter(counter + 1);
  };
  const y = () => {
    if (counter % 3 === 0) return "light";
    if (counter % 3 === 1) return "dark";
    if (counter % 3 === 2) return "reverse";
  };

  return (
    <ThemeProvider theme={theme[y()]}>
 <GlobalStyle />
      <NavBar sw={sw} />

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
      </ThemeProvider>
    
  );
}

export default App;
