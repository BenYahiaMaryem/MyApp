/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import {StyleSheet,ScrollView, Image, Dimensions, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import {TouchableOpacity, Form,Field, View, Container,InputGroup, Content, Button, Left, Right, Icon, Picker,List,ListItem,Radio, Item,Input, Grid, Col, Toast, Text as NBText } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Carousel, { Pagination } from 'react-native-snap-carousel';
//Radio Button https://github.com/ArnaudRinquin/react-native-radio-buttons/blob/master/examples/App.js
import { RadioButtons,SegmentedControls  } from 'react-native-radio-buttons'; // 1.0.0

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';


const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };
  
  /*const FirstRoute = () => <View><Button onPress={() => this.sendData()}  style={{ width: 100, height: 60,alignSelf: 'center', marginTop: 20, marginBottom: 25,backgroundColor: Colors.navbarBackgroundColor }}>
  <Text style={{color: "#fdfdfd", marginLeft:'auto',marginRight:'auto'}}>TAKE PHOTO</Text>
  </Button>
  <Button onPress={() => _getData()}  style={{ width: 100, height: 60,alignSelf: 'center', marginTop: 20, marginBottom: 25,backgroundColor: Colors.navbarBackgroundColor }}>

  <Text style={{color: "#fdfdfd", marginLeft:'auto',marginRight:'auto'}}>QUICK ADD</Text>
</Button> 
</View>;
  const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;*/
export default class Wardrobe extends Component {
    constructor(props) {
        
        super(props);
       
      }
   

    state = {
        index: 0,
        routes: [
          { key: 'top', title: 'TOP' },
          { key: 'bottom', title: 'BOTTOM' },
        ],
    
      };
    
      _handleIndexChange = index => {this.setState({ index })};
    
      _renderHeader = props => <TabBar style={{borderRadius: 2,borderWidth: 0.5,borderColor: 'white', backgroundColor: Colors.navbarBackgroundColor }}{...props} />;
    
      _renderScene = SceneMap({
        top:() => <View><Button onPress={() => Actions.item({item:'top'})}  style={{ width: 100, height: 60,alignSelf: 'center', marginTop: 20, marginBottom: 25,backgroundColor: Colors.navbarBackgroundColor }}>
        <Text style={{color: "#fdfdfd", marginLeft:'auto',marginRight:'auto'}}>TAKE PHOTO</Text>
        </Button>
        <Button onPress={() =>Actions.item({item:'top'})}  style={{ width: 100, height: 60,alignSelf: 'center', marginTop: 20, marginBottom: 25,backgroundColor: Colors.navbarBackgroundColor }}>
      
        <Text style={{color: "#fdfdfd", marginLeft:'auto',marginRight:'auto'}}>QUICK ADD</Text>
      </Button> 
      

  </View>,
        
       
        bottom:() =>  <View><Button onPress={() => Actions.item({item:'bottom'})}  style={{ width: 100, height: 60,alignSelf: 'center', marginTop: 20, marginBottom: 25,backgroundColor: Colors.navbarBackgroundColor }}>
        <Text style={{color: "#fdfdfd", marginLeft:'auto',marginRight:'auto'}}>TAKE PHOTO</Text>
        </Button>
        <Button onPress={() =>Actions.item({item:'bottom'})}  style={{ width: 100, height: 60,alignSelf: 'center', marginTop: 20, marginBottom: 25,backgroundColor: Colors.navbarBackgroundColor }}>
      
        <Text style={{color: "#fdfdfd", marginLeft:'auto',marginRight:'auto'}}>QUICK ADD</Text>
      </Button> 
      

  </View>
      });
    
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
              <Navbar left={left} right={right} title='Wardrobe' />
             

            <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      /> 
    
       
      
     
            
              </Container>
          );
        
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });