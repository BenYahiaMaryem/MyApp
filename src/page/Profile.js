/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import {TouchableOpacity, WebView, StyleSheet,ScrollView, Image, Dimensions, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { NavigationBar, Title,DropDownMenu, Screen, Form,Field, View, Container,InputGroup, Content, Button, Left, Right, Icon, Picker,List,ListItem,Radio, Item,Input, Grid, Col, Toast, Text as NBText  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import Carousel, { Pagination } from 'react-native-snap-carousel';
//Radio Button https://github.com/ArnaudRinquin/react-native-radio-buttons/blob/master/examples/App.js
import { RadioButtons,SegmentedControls  } from 'react-native-radio-buttons'; // 1.0.0

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';


export default class Profile extends Component {
  

      render() {
         
        
        var left = (
            <Left style={{flex:1}}>
              <Button onPress={() => Actions.pop()} transparent>
                <Icon name='ios-arrow-back' />
              </Button>
            </Left>
          );
          var right = (
            <Right style={{flex:1}}>
              <Button onPress={() => Actions.search()} transparent>
                <Icon name='ios-search-outline' />
              </Button>
              <Button onPress={() => Actions.cart()} transparent>
                <Icon name='ios-person' />
              </Button>
            </Right>
          );
          
         
      
        return (
            <Container style={{backgroundColor: '#fdfdfd'}}>
            <Navbar left={left} right={right} title='Profile' />
            <Text style={{
                  color: '#555555',
                  padding: 20, 
                  fontWeight:'bold',
                  paddingLeft: 20,
                  marginBottom: 5,
                  marginTop: 5,
                  fontSize: 20,
                }}>Your skin color</Text>
               
                <Image
          style={{marginLeft:'auto',marginRight:'auto', width: 200, height: 50}}
          source={{uri: 'http://www.color-hex.com/palettes/547.png'}}

         
        />
        

        <Text style={{
                  color: '#555555',
                  padding: 20, 
                  fontWeight:'bold',
                  paddingLeft: 20,
                  marginBottom: 5,
                  marginTop: 5,
                  fontSize: 20,
                }}>Your eye color</Text>
               
                <Image
          style={{marginLeft:'auto',marginRight:'auto', width: 200, height: 50}}
          source={{uri: 'https://i.pinimg.com/736x/74/02/c2/7402c2ebff5d722c001818c62f459ce5.jpg'}}
        />
        
        <Text style={{
                  color: '#555555',
                  padding: 20, 
                  fontWeight:'bold',
                  paddingLeft: 20,
                  marginBottom: 5,
                  marginTop: 5,
                  fontSize: 20,
                }}>Your hair color</Text>
               
                <Image
          style={{marginLeft:'auto',marginRight:'auto', width: 200, height: 120}}
          source={{uri: 'https://femina.wwmindia.com/content/2017/May/hair_colour_palette_1486110036_1496212559.jpg'}}
        />
        <Button style={{ width: 120, height: 60,alignSelf: 'center', marginTop: 20, marginBottom: 25,backgroundColor: Colors.navbarBackgroundColor }}>
                        <Text style={{color: "#fdfdfd", marginLeft:'auto',marginRight:'auto'}}>Submit</Text>
                    </Button>
        </Container>
         
        );
      
    }
    
}


    
        
 
        
     