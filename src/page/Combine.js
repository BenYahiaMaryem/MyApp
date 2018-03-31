/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import {StyleSheet,ScrollView, Image, Dimensions, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import {Form,Field, View, Container,InputGroup, Content, Button, Left, Right, Icon, Picker,List,ListItem,Radio, Item,Input, Grid, Col, Toast, Text as NBText } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Carousel, { Pagination } from 'react-native-snap-carousel';
//Radio Button https://github.com/ArnaudRinquin/react-native-radio-buttons/blob/master/examples/App.js
import { RadioButtons,SegmentedControls  } from 'react-native-radio-buttons'; // 1.0.0

// Our custom files and classes import
import Colors from '../Colors';
import Text from '../component/Text';
import Navbar from '../component/Navbar';


export default class Combine extends Component {
  constructor(props) {
    
    super(props);
    this.state = { UserName: 'maryem'};
    
  }
      state={hasError: false,
        errorText: ''}

        login() {
          
          this.setState({hasError: true, errorText: 'You choose event '+this.state.checkListOption});
        }
        //POST
        sendData(){
          
           
           fetch('http://localhost:5000/send', {
           method: 'POST',
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             name: this.state.UserName
           }),
         });
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
            <Navbar left={left} right={right} title='Combine Outfit' />
            <Content >
            {/* <NBText style={{backgroundColor: '#fdfdfd', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, alignItems: 'center'}}> Choose An Event </NBText>  */}
          <ScrollView style={styles.container}>
            {/* {this.renderbasic()} */}
            {this.renderCheckList()}
           {/*  {this.renderSegmentControlClone()}
            {this.renderVerticalSegmentControlClone()}
            {this.renderCustomSegmentControlClone()} */}
          </ScrollView>
          {this.state.hasError?<Text style={{color: "#c0392b", textAlign: 'center', marginTop: 10}}>{this.state.errorText}</Text>:null}
          <Button onPress={() => this.login()} style={{ width: 120, height: 60,alignSelf: 'center', marginTop: 20, marginBottom: 25,backgroundColor: Colors.navbarBackgroundColor }}>
                        <Text style={{color: "#fdfdfd", marginLeft:'auto',marginRight:'auto'}}>Combine</Text>
                    </Button>
          </Content>
          </Container>
        );
      }
    
      renderCheckList() {
        const options = [
          "Casual",
          "Formal",
          "Vacation",
          "Workwear"
        ];
    
        function setSelectedOption(checkListOption){
          this.setState({
            checkListOption,
          });
        }
    
        function renderOption( option, selected, onSelect, index) {
    
          const textStyle = {
            paddingTop: 20,
            paddingBottom: 20,
            color: 'black',
            flex: 1,
            fontSize: 17,
          };
          const baseStyle = {
            flexDirection: 'row',
          };
          var style;
          var checkMark;
    
          if (index > 0) {
            style = [baseStyle, {
              borderTopColor: '#eeeeee',
              borderTopWidth: 1,
            }];
          } else {
            style = baseStyle;
          }
    
          if (selected) {
            checkMark = <Text style={{
              flex: 0.1,
              color: '#007AFF',
              fontWeight: 'bold',
              paddingTop: 8,
              fontSize: 20,
              alignSelf: 'center',
            }}>✓</Text>;
          }
    
          return (
            <TouchableWithoutFeedback onPress={onSelect} key={index}>
              <View style={style}>
                <Text style={textStyle}>{option}</Text>
                {checkMark}
              </View>
            </TouchableWithoutFeedback>
          );
        }
    
        function renderContainer(options){
          return (
            <View style={{
              backgroundColor: 'white',
              paddingLeft: 20,
              borderTopWidth: 1,
              borderTopColor: '#cccccc',
              borderBottomWidth: 1,
              borderBottomColor: '#cccccc',
            }}>
              {options}
            </View>
          );
        }
    
        return (
          <View style={{flex: 1}}>
            <View style={{marginTop: 10, backgroundColor: 'white'}}>
              {/* <Text style={{padding: 20, fontWeight:'bold'}}>Choose An Event</Text> */}
    
              <View style={{
                backgroundColor: '#eeeeee',
                paddingTop: 5,
                paddingBottom: 5,
              }}>
                <Text style={{
                  color: '#555555',
                  padding: 20, 
                  fontWeight:'bold',
                  paddingLeft: 20,
                  marginBottom: 5,
                  marginTop: 5,
                  fontSize: 20,
                }}>Choose An Event</Text>
                <RadioButtons
                  options={ options }
                  onSelection={ setSelectedOption.bind(this) }
                  selectedOption={ this.state.checkListOption }
                  renderOption={ renderOption }
                  renderContainer={ renderContainer }
                />
              </View>
              {/*  <Text style={{
                margin: 20,
              }}>Event: {this.state.checkListOption || 'none'}</Text>  */}
            </View>
            <Text>User Registration Form</Text>
        <Item>
        <Input placeholder="Name" onChangeText={(UserName) => this.setState({UserName})} 
         value={this.state.UserName} />
      </Item>
        
        <Button onPress={() => this.sendData()} style={{backgroundColor: Colors.navbarBackgroundColor, marginTop: 20}}>
              <Text style={{color: '#fdfdfd'}}>send</Text>
            </Button>
          </View>);
    
      }
    
      // Super basic example
     /* renderbasic(){
    
        const options = [
          "Option 1",
          "Option 2"
        ];
    
        function setSelectedOption(selectedOption){
          this.setState({
            selectedOption
          });
        };
    
        function renderOption(option, selected, onSelect, index){
          const style = selected ? { fontWeight: 'bold'} : {}
    
          return (
            <TouchableWithoutFeedback onPress={onSelect} key={index}>
              <View><Text style={style}>{option}</Text></View>
            </TouchableWithoutFeedback>
          );
        }
    
        function renderContainer(optionNodes){
          return <View>{optionNodes}</View>;
        }
    
        return (
          <View style={{marginTop: 10, padding: 20, backgroundColor: 'white'}}>
            <Text style={{paddingBottom: 10, fontWeight:'bold'}}>Super basic</Text>
            <RadioButtons
              options={ options }
              onSelection={ setSelectedOption.bind(this) }
              selectedOption={this.state.selectedOption }
              renderOption={ renderOption }
              renderContainer={ renderContainer }
            />
            <Text>Selected option: {this.state.selectedOption || 'none'}</Text>
          </View>); 
      }*/
   /*   renderSegmentControlClone(){
        const options = [
          'Paid',
          'Free',
          'Top grossing',
        ];
    
        function setSelectedOption(selectedSegment){
          this.setState({
            selectedSegment
          });
        }
    
        return (
          <View style={{marginTop: 10, padding: 20, backgroundColor: 'white'}}>
            <Text style={{paddingBottom: 10, fontWeight:'bold'}}>SegmentedControl</Text>
            <SegmentedControls
              options={ options }
              onSelection={ setSelectedOption.bind(this) }
              selectedOption={ this.state.selectedSegment }
            />
            <Text style={{marginTop: 10}}>Selected option: {this.state.selectedSegment || 'none'}</Text>
          </View>);
      }*/
     /* renderVerticalSegmentControlClone(){
        const options = [
          'So',
          'Many',
          'Choices',
          'It',
          'Is',
          'Hard',
          'To',
          'Pick',
          'One',
        ];
    
        function setSelectedOption(selectedVerticalSegment){
          this.setState({
            selectedVerticalSegment
          });
        }
    
        return (
          <View style={{marginTop: 10, padding: 20, backgroundColor: 'white'}}>
            <Text style={{paddingBottom: 10, fontWeight:'bold'}}>SegmentedControl (direction={'column'})</Text>
            <SegmentedControls
              direction={'column'}
              options={ options }
              onSelection={ setSelectedOption.bind(this) }
              selectedOption={this.state.selectedVerticalSegment }
            />
            <Text style={{marginTop: 10}}>Selected option: {this.state.selectedVerticalSegment || 'none'}</Text>
          </View>);
      }
      renderCustomSegmentControlClone(){
        const options = [
          { label:'We', value: 'Do' },
          { label:'Love', value: 'You'},
          { label:'Music', value: '?' },
        ];
    
        function setSelectedOption(option){
          this.setState({
            selectedCustomSegment: option,
          });
        }
    
        return (
          <View style={{marginTop: 10, padding: 20, backgroundColor: 'white'}}>
            <Text style={{paddingBottom: 10, fontWeight:'bold'}}>SegmentedControl (custom colors and option format)</Text>
            <SegmentedControls
              tint= {'#f80046'}
              selectedTint= {'white'}
              backTint= {'#1e2126'}
              optionStyle= {{
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'Snell Roundhand'
              }}
              containerStyle= {{
                marginLeft: 10,
                marginRight: 10,
              }}
              options={ options }
              onSelection={ setSelectedOption.bind(this) }
              selectedOption={ this.state.selectedCustomSegment }
              extractText={ (option) => option.label }
              testOptionEqual={ (a, b) => {
                if (!a || !b) {
                  return false;
                }
                return a.label === b.label
              }}
            />
            <Text style={{marginTop: 10}}>Selected option: {this.state.selectedCustomSegment&& this.state.selectedCustomSegment.value || 'none'}</Text>
          </View>);
      } */
    }
   
    var styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
    });

    
    

  /* 
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
              <Icon name='ios-cart' />
            </Button>
          </Right>
        );
        return(
            <Container style={{backgroundColor: '#fdfdfd'}}>
                <Navbar left={left} right={right} title='Combine Outfit' />
                <Content>
                <NBText style={{backgroundColor: '#fdfdfd', paddingTop: 10, paddingBottom: 10, paddingLeft: 12, paddingRight: 12, alignItems: 'center'}}> Choose An Event </NBText>  
                
                <ScrollView style={styles.container}>
        {this.renderbasic()}
        {this.renderCheckList()}
        {this.renderSegmentControlClone()}
        {this.renderVerticalSegmentControlClone()}
        {this.renderCustomSegmentControlClone()}
      </ScrollView>
        
                    <Button style={{ flex:1,alignSelf: 'center', marginTop: 20, marginBottom: 25 }}>
                        <Text>Combine</Text>
                    </Button>
               
                   
              <List>
                       <ListItem>
                            <Radio selected={false}
                            
                             />
                            <Text>Casual</Text>
                        </ListItem>
                        <ListItem>
                            <Radio selected={false}
                            />
                            <Text>Formal</Text>
                        </ListItem>
                        <ListItem>
                            <Radio selected={true}
                             />
                            <Text>Vacation</Text>
                        </ListItem>
                        <ListItem>
                            <Radio selected={false}
                            />
                            <Text>WorkWear</Text>
                        </ListItem>
                    </List>  
                   
                
                </Content>

            </Container>

        );

    }
   
} */

