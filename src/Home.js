import React from 'react'
import './Home.css'
import ImageSlider from './ImageSlider'
import Product from './Product'
// import CarouselPage from './slideFeature'
import { SliderData } from './SliderData'
import { useStateValue } from './StateProvider'


function Home() {

    const [{ basket }] = useStateValue();

    return (
        <div className="home">
            <div className="home_container">
                <ImageSlider slides={SliderData}/>
                {/* <CarouselPage className="carousel" /> */}
               

                {/* Product id, title, price, rating, image*/}
                <div className="home__row">
                    <Product 
                        id="98765"
                        title="Microsoft - Xbox One S 1TB All-Digital Edition Console with Xbox One Wireless Controller"
                        price={470.98}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/51VQXsQ9P6L._AC_UY218_.jpg" 
                    />

                    <Product 
                        id="48375"
                        title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
                        price={497.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg" 
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="345678"
                        title="Sony PS5"
                        price={499.99}
                        rating={5}
                        image="https://www.psu.com/wp/wp-content/uploads/2020/07/PS5-5-4-1024x576.jpg" 
                    />
                    <Product 
                        id="1232343"
                        title="NexiGo 2020 Playstation 4 PS4 Slim 1TB Console Holiday Bundle Charging Dock Bundle"
                        price={479.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61W0a8kxbML._AC_UY218_.jpg" 
                        />
                    <Product 
                        id="1232344"
                        title="Lib Tech TRS HP Snowboard Mens"
                        price={419.95}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71kHW-r%2BSGL._AC_SL1500_.jpg" 
                        />
                </div>

                <div className="home__row">
                    <Product 
                        id="123234"
                        title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
                        price={899.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg" 
                     />

                     <Product 
                        id="1245234"
                        title="AmazonBasics 127cm (50 inches) Fire TV Edition 4K Ultra HD Smart LED TV AB50U20PS (Black)"
                        price={599.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81c5klKpUdL._AC_UL320_.jpg" 
                     />
                </div>

                 <div className="home__row">
                    <Product 
                        id="1245234"
                        title="OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)"
                        price={499.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71zlbKfhFsL._AC_UL320_.jpg" 
                     />

                      <Product 
                        id="1245234"
                        title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)"
                        price={399.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61Tw6LZoaiL._AC_UL320_.jpg" 
                     />

                      <Product 
                        id="1245234"
                        title="OnePlus 8 Pro (Onyx Black 12GB RAM+256GB Storage)"
                        price={699.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61YSMhOd5EL._AC_UL320_.jpg" 
                     />
                      <Product 
                        id="1245234"
                        title="OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)"
                        price={399.00}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UL320_.jpg" 
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                </div>

                        <div className="home__row">
                        <Product
                            id="4903850"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                            price={199.99}
                            rating={3}
                            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        />
                        <Product
                            id="23445930"
                            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                            price={98.99}
                            rating={5}
                            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        />
                        <Product
                            id="3254354345"
                            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                            price={598.99}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        />
                        </div>

                        <div className="home__row">
                        <Product
                            id="90829332"
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                            price={1094.98}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        />
                </div>
            </div>
        </div>
                
        
        
    )
}

export default Home
