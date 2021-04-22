import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // removing item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    }
    return (
        <div className = "checkoutProduct">
            <img className="checkoutProduct__image"src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p><StarIcon style={{ color: "#ffad33" }} /></p>
                        ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
