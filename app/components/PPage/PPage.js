import React, { Component } from "react";
import { fetchfile } from '../hasuraApi';
import {
  StyleSheet,
  View,
  AppRegistry,
  
} from "react-native";

import {
  Container,
  Header,
  Button,
  Icon,
  Item,
  Content,
  Text,
  Footer,
  FooterTab,
  Right,
  Body,
  Left,
  Card,
  CardItem,
  Thumbnail,
  Subtitle,
  
} from "native-base";

const logo = require("./Img/logo.png");

export default class PPage extends Component {
   
    async componentDidMount(){

        
    }
    render() {
        
        return (
            <Container >
               <Header hasSubtitle style={{backgroundColor:"white",height:90}}>
                <Left>   
                    <Thumbnail source={logo} /> 
                             
                </Left>
                <Body>
                    <Text>Explore NativeBase</Text>
                    <Subtitle>
                        <Text>Explorer@nb.in</Text>
                    </Subtitle>
                    <Text style={{fontSize:10,}}> 690 Following 650 Followers </Text>
                                 
                </Body>                 
                <Right>    
                    <Button transparent>
                        <Icon name="ios-arrow-down"/>
                    </Button>    
                </Right>    
                         
               </Header>
               <Content style={{ backgroundColor: "#FFF" }}>
                    <Card style={styles.mb}>
                        <CardItem >
                            <Left>
                                <Icon name="person" />
                            <Body>
                                <Button transparent>
                                    <Text>Profile</Text>
                                </Button>    
                            
                            </Body>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Icon name="ios-list-box-outline" />
                            <Body>
                                <Button transparent>
                                    <Text>Lists</Text>
                                </Button>    
                            
                            </Body>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Icon name="ios-flash-outline" />
                            <Body>
                                <Button transparent>
                                    <Text>Moments</Text>
                                </Button>    
                            
                            </Body>
                            </Left>
                        </CardItem>
                        <CardItem >
                            <Left>
                                <Icon name="ios-browsers-outline" />
                            <Body>
                                <Text>Highlights</Text>
                            
                            </Body>
                            </Left>
                        </CardItem>
                    </Card>  
                    <Card transparent>
                        <CardItem >
                            <Left>
                               <Button transparent>
                                    <Text>Settings and Privacy</Text>
                               </Button>                  
                            </Left>
                        </CardItem>
                        <CardItem  >
                            <Left>
                                <Button transparent>
                                    <Text>Help Center</Text>
                                </Button>                     
                            </Left>
                        </CardItem>
                    </Card>  
                    <Thumbnail square source={{uri:'https://filestore.carton66.hasura-app.io/v1/file/0e2fd6f4-6d21-4c3b-8f41-bbeaec0ccd45'}}/>
                                  
               </Content>
               <Footer>
                    <FooterTab style={styles.footermb}>
                        <Button transparent>
                            <Icon name="ios-moon-outline" color="#515BEA"/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-apps-outline" color="#515BEA"/>
                        </Button>
                            
                    </FooterTab>
                </Footer>         
            </Container>
        );
    }
}
const styles = StyleSheet.create({
  
  mb: {
    marginBottom: 15
  },

 footermb: {
        backgroundColor: "#FFF",
            },
 
});


AppRegistry.registerComponent('PPage', () => PPage);