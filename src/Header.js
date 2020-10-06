import React from 'react';
import "./Header.css";
import{Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from './Firebase';

function Header() {
    const [{basket,user}]=useStateValue();

    const login = ()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className='header'>
            {/* logo on the left side*/}
            <Link to="/">
                <img
                    className="header__logo" 
                    src="http://pngimg.com/uploads/shopping_cart/shopping_cart_PNG42.png"
                    alt=""
                />
            </Link>
            {/*Search Bar*/}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
                
            </div>
            {/*# links*/}
            <div className="header__nav">
                {/*1st link*/}
            
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionline1">Hello {user?.email} </span>
                        <span className="header__optionline2">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>


                {/*2nd link*/}
                
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionline1">Returns</span>
                        <span className="header__optionline2">& Orders</span>
                    </div>
                </Link>

                {/*3rd link*/}
                
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/*Shopping Basket icon*/}
                        <ShoppingBasketIcon />
                        
                        {/*Number of items*/}
                        <span className="header__optionline2 header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
            
                        
        </nav>
    )
}

export default Header
