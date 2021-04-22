import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import ErrorIcon from '@material-ui/icons/Error';
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [{ basket, user }] = useStateValue();

    return (
        <div className = "subtotal">
             {/* Price */}
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p className="exclaimationLine"><ErrorIcon style={{ color: "#146eb4" }}/> Add ₹100.00 of 
                        eligible items to your order to qualify for FREE Delivery</p>
                    
                        <p className="priceLine">
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push(user ? "/payment" : "/login")}>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
