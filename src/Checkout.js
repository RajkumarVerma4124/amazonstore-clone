import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider";
import Subtotal from './Subtotal';

function Checkout() {
        
    const [{ basket, user }] = useStateValue();
    return (
        <div className="checkout">
                <div className="checkout__left">
                    <img 
                        className="checkout__ad" 
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
                        alt="Checkout ad"
                    />

                    {basket?.length === 0 ? (
                        <div>
                            <h3>Hello, {user?.email}</h3>
                            <h2>Your Amazon Cart is empty.</h2>
                            <p>Your shopping cart is waiting. Give it purpose – 
                                fill it with groceries, clothing, household supplies, electronics and more.</p>
                                <p>Continue shopping on the Amazon.in homepage, learn about today's deals, or 
                                visit your Wish List.</p>
                        </div>
                        ) : (
                        <div>
                            <h3>Hello, {user?.email}</h3>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {/*  List of all the products for checkout */}
                            {basket?.map(item => (
                                <CheckoutProduct 
                                    className="productOnCheckout"
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
                </div>
            {basket.length > 0 && (
              <div className="checkout__right">
                <Subtotal />
              </div>
            )}
        </div>
    )
}

export default Checkout
