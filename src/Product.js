import React from 'react'
import './Product.css'
import Rating from './Rating'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{}, dispatch] = useStateValue();    
    const addToBasket = () => {
        //add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    };

   



    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p><StarIcon style={{ color: "#ffad33" }} /></p>
                    ))}
                </div>
            </div>
            
            <img src={image} alt="product image" />
            <Rating/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>

        
    )
}

export default Product
