import Headers from "./Header";
import Home from "./Home";
import "./App.css";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
function App() {
  const promise = loadStripe(
    "pk_test_51KgqiwDBbAW4DHEq6OR5CniQPXdFp8JSuVtcsZxG4OklUJif5mRyCqS7oel8oX3vrcUInA4aMfgHwWwxeTwxd0Vn00qO1d4M05"
  );
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("the user is >>", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Headers />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Headers />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Headers />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
