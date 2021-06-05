import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.jsx";
import ShopPage from "./pages/shop/shop.jsx";
import Header from "./components/header/header.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in -and-sign-up";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <SignInAndSignUpPage path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
