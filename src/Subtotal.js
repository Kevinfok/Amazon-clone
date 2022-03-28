import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  // let totalValue=0;
  // basket.map((value)=>totalValue+=value.price);

  const totalValue = basket.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  // const totalValue= basket.reduce(function (tmp, current) {
  //   return tmp + current.price
  // }, 0); // < Start with 0

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalValue}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={ e =>{history.push('/payment')}}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
