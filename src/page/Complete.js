/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import {TouchableOpacity, WebView, StyleSheet,ScrollView, Image, Dimensions, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { TextInput, NavigationBar, Title,DropDownMenu, Screen, Form,Field, View, Container,InputGroup, Content, Button, Left, Right, Icon, Picker,List,ListItem,Radio, Item,Input, Grid, Col, Toast, Text as NBText  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import Carousel, { Pagination } from 'react-native-snap-carousel';
//Radio Button https://github.com/ArnaudRinquin/react-native-radio-buttons/blob/master/examples/App.js
import { RadioButtons,SegmentedControls  } from 'react-native-radio-buttons'; // 1.0.0

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';



export default class Complete extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = { article: 'TOP',data:[]};
    
  }
  state={hasError: false,
    errorText: ''}

    complete = async (id,type) => {
       //alert(JSON.stringify(id))
      alert(JSON.stringify(id))
      fetch('http://localhost:5000/script/'+type, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id
        }),
      })
      .then(response => response.json())
      .then(response =>  Actions.outfit({outfits: response.outfit}))
      .catch(e => { throw e; })
     
  }
  
    getData(){
      
      return fetch('http://localhost:5000/wardrobe',
      {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
      }
      )
     .then((response) => response.json())
     .then((responseJson) => {
      this.setState({data: JSON.parse(responseJson)});
      })
     .catch((error) => {
       console.error('failedeeeee '+error);
     });
      
   }
   /*renderImages(){
    return this.state.data.map((item) => {
      
      return (
          
          
          <Image  key={item.id} style={{width: 80, height: 80}} source={{ uri: 'data:image/jpeg;base64,'+item.imageDecoded}}/>
           
      );
  });
  }*/
 
   componentDidMount() {
    this.getData();
    //this.sendData()
   }

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
            <Navbar left={left} right={right} title='Complete' />
            <Text style={{
                  color: '#555555',
                  padding: 20, 
                  fontWeight:'bold',
                  paddingLeft: 20,
                  marginBottom: 5,
                  marginTop: 5,
                  fontSize: 20,
                }}>Choose an item from wardrobe</Text>
             <Picker
              selectedValue={this.state.article}
              onValueChange={(itemValue, itemIndex) => this.setState({article: itemValue,hasError:true,errorText: 'You choose item '+itemValue})}>
              
              <Picker.Item label="TOP" value="TOP" />
              <Picker.Item label="SKIRT" value="SKIRT" />
              

            </Picker>
          
 
            {/* {this.state.hasError? <Text style={{color: "#c0392b", textAlign: 'center', marginTop: 10}}>{this.state.errorText}</Text>:null} */}
          
           {this.state.hasError? <Image style={{width: 80, height: 80}} source={{ uri: 'data:image/jpeg;base64,'+this.state.data[0].imageDecoded}}/>:null}
             
            
            <ScrollView contentContainerStyle={{ paddingVertical: 20}} //style={{paddingVertical: 20,flexDirection : 'row',flexWrap : 'wrap',alignContent : 'stretch'}}
            >
            {
             this.state.data.map((item) => {
                return (
          
           <TouchableOpacity onPress={()=>this.complete(item._id.$oid,item.type)}> 
          <Image  key={item._id} style={{width: 80, height: 80}} source={{ uri: 'data:image/jpeg;base64,'+item.imageDecoded}}/>
          </TouchableOpacity>
      );
             
              
          }
          )
          
       
      }
      </ScrollView>
        </Container>
         
        );
      
    }
    
}


    
        
 
        
     