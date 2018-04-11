import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Icon} from 'native-base';
export default class LikeButton extends Component{
    state = {
        active : false
    }

    sendData(val,valeur){
        
         
         fetch('http://localhost:5000/send', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           id: val,
           type:valeur
         }),
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
    render(){
        if(!this.state.active){
            return(
                
                <View onTouchStart={()=>{this.setState({active : true})
                    this.sendData(this.props.val,this.props.valeur)}}>
                     
                    <Icon style={{color : '#aaa',fontSize : 25}} ios="ios-heart-outline" android="md-heart-outline" />
                </View>
            )
        }
        else{
            return(
                <View onTouchStart={()=>{this.setState({active : false})
                    
                    }}>
                    
                    <Icon style={{color : 'rgb(219, 10, 91)',fontSize : 25}} ios="ios-heart" android="md-heart" />
                </View>
            )
        }
    }
}