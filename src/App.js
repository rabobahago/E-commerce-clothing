import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.jsx";

const HatPage = () => {
  return (
    <div>
      <h2>Hello world of Hats</h2>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
