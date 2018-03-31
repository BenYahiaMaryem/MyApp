/**
* This is the Home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from '../component/Text';
import Navbar from '../component/Navbar';
import SideMenu from '../component/SideMenu';
import SideMenuDrawer from '../component/SideMenuDrawer';
import CategoryBlock from '../component/CategoryBlock';


export default class Home extends Component {
  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name='ios-menu-outline' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search-outline' />
        </Button>
        <Button onPress={() => Actions.profile()} transparent>
          <Icon name='ios-person' />
        </Button>
      </Right>
    );
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="FASHION" />
            <Content>
              {this.renderCategories()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderCategories() {
    let cat = [];
    for(var i=0; i<categories.length; i++) {
      cat.push(
        <CategoryBlock key={categories[i].id} id={categories[i].id} image={categories[i].image} title={categories[i].title} />
      );
    }
    return cat;
  }

}

var categories = [
  {
    id: 1,
    title: 'LOOKS',
    //image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_489/v1500284127/pexels-photo-497848_yenhuf.jpg'
    image:'http://modernfashionblog.com/wp-content/uploads/2015/05/20-Latest-Summer-Fashion-Trends-Dresses-Ideas-Looks-For-Girls-2015-F.jpg'
  },
  /*{
    id: 2,
    title: 'MY WARDROBE',
    //image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_460/v1500284237/pexels-photo-324030_wakzz4.jpg'
    image:'https://i.pinimg.com/736x/1d/b8/d5/1db8d51680a58d0adaaf5a02c285e2de--minimal-wardrobe-my-wardrobe.jpg'
  },*/
  {
    id: 2,
    title: 'COMBINE OUTFITS',
    //image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_445/v1500284286/child-childrens-baby-children-s_shcevh.jpg'
    // image:'https://abeautifulmess.typepad.com/.a/6a00d8358081ff69e2017d40f6cb65970c-800wi'
    image:'https://i.pinimg.com/736x/1d/b8/d5/1db8d51680a58d0adaaf5a02c285e2de--minimal-wardrobe-my-wardrobe.jpg'
    
  },
  {
    id: 3,
    title: 'COMPLETE OUTFITS',
   // image: 'http://res.cloudinary.com/atf19/image/upload/c_scale,w_467/v1500284346/pexels-photo-293229_qxnjtd.jpg'
    image:'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1483733020/winter-travel-outfits-15-WSTYLE1216.jpg?itok=RXSUXVc7'}
     
  
];
