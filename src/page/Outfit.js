/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import {Animated, StyleSheet,ScrollView, Image, Dimensions, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import {Form,Field, View, Container,InputGroup, Content, Button, Left, Right, Icon, Picker,List,ListItem,Radio, Item,Input, Grid, Col, Toast, Text as NBText } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Carousel, { Pagination } from 'react-native-snap-carousel';
//Radio Button https://github.com/ArnaudRinquin/react-native-radio-buttons/blob/master/examples/App.js
import { RadioButtons,SegmentedControls  } from 'react-native-radio-buttons'; // 1.0.0

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';


export default class Outfit extends Component {
    constructor(props) {
        
        super(props);
        
        
      }
      
    
    render() {
      

        let screenWidh=Dimensions.get('window').width
        let screenHeight=Dimensions.get('window').height
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
            <Navbar left={left} right={right} title='Outfit' />
            
            <ScrollView horizontal={true} pagingEnabled={true} >
         
              
              <View style={{
        flex: 1,
        marginTop:20,
        width:screenWidh,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
          <Text>Outfit 1</Text>
            <Image style={{width: 100, height: 100}} source={{ uri: 'data:image/jpeg;base64,'+this.props.outfits[0]}}/>
            <Image style={{width: 100, height: 100}} source={{ uri: 'data:image/jpeg;base64,'+this.props.outfits[1]}}/>
            <Text>Did you like it ?</Text>
            </View>


            
            <View style={{
              flex: 1,
              marginTop:20,
              width:screenWidh,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
      <Text>Outfit 2</Text>
           <Image style={{width: 100, height: 100}} source={{ uri: 'data:image/jpeg;base64,'+this.props.outfits[0]}}/>
            <Image style={{width: 100, height: 100}} source={{ uri: 'data:image/jpeg;base64,'+this.props.outfits[2]}}/>
            <Text>Did you like it ?</Text>
            </View>
            
            
            
            <View style={{
        flex: 1,
        marginTop:20,
        width:screenWidh,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Outfit 3</Text>
            <Image style={{width: 100, height: 100}} source={{ uri: 'data:image/jpeg;base64,'+this.props.outfits[0]}}/>
            <Image style={{width: 100, height: 100}} source={{ uri: 'data:image/jpeg;base64,'+this.props.outfits[3]}}/>
            <Text>Did you like it ?</Text>
            </View>
           
           
           
           <View style={{
        flex: 1,
        marginTop:20,
        width:screenWidh,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
       <Text>Outfit 4</Text>
            <Image style={{width: 100, height: 100}} source={{ uri: 'data:image/jpeg;base64,'+this.props.outfits[0]}}/>
            <Image style={{width: 100, height: 100}} source={{ uri: 'data:image/jpeg;base64,'+this.props.outfits[4]}}/>
            <Text>Did you like it ?</Text>
            </View>
       
   
           </ScrollView> 

            </Container>
            
            )
      

    }

    
}