import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';
import { Zoom } from '@material-ui/core';


function Header() {

    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <nav className="header">
            {/* logo on the left -> amazon ig */}
            <Link to = "/">
                <img 
                        className="header__logo"
                        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                        alt="Amazon Logo" 
                    />
            </Link>
            <Zoom in={true}>
            {/* search box */}
             <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            </Zoom>

            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user && "/login"} >
                    <div  onClick={login} className="header__option">
                         <span className="header__optionLineOne"> Hello {user?.email} </span>
                         <span className="header__optionLineTwo"> {user ? 'Sign Out' : 'Sign in'} </span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to='/orders' >
                    <div className="header__option">
                         <span className="header__optionLineOne"> Return </span>
                         <span className="header__optionLineTwo"> & Orders </span>
                    </div>
                </Link>
                {/* 3rd link */}
                 <Link to="/" >
                    <div className="header__option">
                         <span className="header__optionLineOne"> Your </span>
                         <span className="header__optionLineTwo"> Prime </span>
                    </div>
                </Link>
                {/* 4th link */}
                 <Link to="/checkout" >
                    <div className="header__optionBasket">
                        <Zoom in={true}>
                        {/* Shopping Basket Icon */}
                        <ShoppingBasketIcon />
                        {/* Number of items in the basket */}
                        </Zoom>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            {/* basket icon with number */}            
        </nav>
    )
}

export default Header
