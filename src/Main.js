/**
* This is the Main file
* This file contains the routes of all the pages
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';


// Our custom files and classes import
import Home from './page/Home';
import Search from './page/Search';
import Cart from './page/Cart';
import WishList from './page/WishList';
import Map from './page/Map';
import Newsletter from './page/Newsletter';
import Contact from './page/Contact';
import Category from './page/Category';
import Product from './page/Product';
import ImageGallery from './page/ImageGallery';
import Login from './page/Login';
import Signup from './page/Signup';
import Checkout from './page/Checkout';
import Combine from './page/Combine';
import Complete from './page/Complete';
import Profile from './page/Profile';
import Outfit from './page/Outfit';
import Wardrobe from './page/Wardrobe';
import MyWardrobe from './page/MyWardrobe';
import Items from './page/Items';
import AllProducts from './page/AllProducts';

export default class Main extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

  render() {
    return(
      <Root>
        <Router>
          <Scene key="root">
            <Scene initial key="home" component={Home} hideNavBar />
            <Scene key="search" component={Search} modal hideNavBar />
            <Scene key="cart" component={Cart} modal hideNavBar />
            <Scene key="wishlist" component={WishList} modal hideNavBar />
            <Scene key="map" component={Map} modal hideNavBar />
            <Scene key="contact" component={Contact} modal hideNavBar />
            <Scene key="newsletter" component={Newsletter} modal hideNavBar />
            <Scene key="category" component={Category} hideNavBar />
            <Scene key="product" component={Product} hideNavBar />
            <Scene key="imageGallery" component={ImageGallery} modal hideNavBar />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="signup" component={Signup} hideNavBar />
            <Scene key="checkout" component={Checkout} hideNavBar />
            <Scene key="combine" component={Combine} hideNavBar />
            <Scene key="complete" component={Complete} hideNavBar />
            <Scene key="profile" component={Profile} hideNavBar />
            <Scene key="outfit" component={Outfit} hideNavBar />
            <Scene key="wardrobe" component={Wardrobe} hideNavBar />
            <Scene key="mywardrobe" component={MyWardrobe} hideNavBar />
            <Scene key="item" component={Items} hideNavBar />
            <Scene key="AllProducts" component={AllProducts} hideNavBar />
          </Scene>
        </Router>
      </Root>
    );
  }

}
