import React, { Component } from "react";

import {
  StyleSheet,
  View,
  AppRegistry,
  Image,
  Dimensions
  
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
  Input,
  Right,
  Body,
  Left,
  Card,
  CardItem,
  IconNB,
  Thumbnail
} from "native-base";

const deviceWidth = Dimensions.get("window").width;

const logo = require("./Img/logo.png");
const cardImage = require("./Img/drawer-cover.png");
const logo2 = require("./Img/logo2.png");
const cardImage2 = require("./Img/drawer-cover2.png");

export default class TLine extends Component {
    render() {
        return (
            <Container >
               <Header   style={{justifyContent:'space-between',backgroundColor:"white"}}>
                    <Item>
                            <Button transparent >
                                   <Icon  name="home"/>
                            </Button>
                               
                            <Button transparent > 
                                    <Icon  name="ios-search-outline"/>
                            </Button> 

                            <Button transparent >
                                    <Icon  name="ios-notifications-outline"/>
                            </Button>
                        
                            
                            <Button transparent >
                                    <Icon  name="ios-mail-outline"/>
                            </Button>
                       </Item>         
                    
                    
               </Header>
               <Content style={styles.content} padder>
                    <Card style={styles.mb}>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={logo} />
                            <Body>
                                <Text>Exploder@explode.in                       24m</Text>
                                
                            </Body>
                            </Left>
                        </CardItem>
   
                        <CardItem>
                            <Body>
                                <Text>
                                    Tremors in Delhi . Strong earth quake.
                                    <Icon name="ios-refresh-circle" color="blue"/>
                                    Vibrations on.
                                    !!!
                                </Text>
                                <Image
                                    style={{
                                    alignSelf: "center",
                                    height: 150,
                                    resizeMode: "cover",
                                    width: deviceWidth / 1.18,
                                    marginVertical: 5
                       
                                            }}
                                    source={cardImage}
                                />
                            
                            </Body>
                        
                    </CardItem>
                    <CardItem style={{ paddingVertical: 0}}>
                        <Left>
                            <Button transparent>
                                
                                <Icon name="ios-chatbubbles-outline"/> 
                                <Text>60</Text> 
                                
                            </Button>
                            <Button transparent>    
                                <Icon name="md-sync"/>
                                <Text>7</Text>
                            </Button>    
                            <Button transparent>
                                <Icon name="ios-heart-outline"/>
                                <Text>19</Text>
                            </Button>
                            
                            <Button transparent> 
                                 
                                <Icon name="ios-mail-outline"/>
                            
                            </Button>
                            
                        </Left>
                    </CardItem>
                 </Card>
                 <Card style={styles.mb}>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={logo2} />
                            <Body>
                                <Text>Meteor@rocksolid.com                15m</Text>
                                
                            </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                    Next tweet!!!
                                </Text>
                                <Image
                                    style={{
                                    alignSelf: "center",
                                    height: 150,
                                    resizeMode: "cover",
                                    width: deviceWidth / 1.18,
                                    marginVertical: 5
                       
                                            }}
                                    source={cardImage2}
                                />
                            
                            </Body>
                        
                    </CardItem>
                  </Card>    
                </Content>
               <Footer>
                    <FooterTab style={styles.footermb}>
                        <Button active transparent >
                            <Text style={styles.backarrow}> All  </Text>
                        </Button>
                        <Button>
                            <Text>Mentions</Text>
                        </Button>
                        <Button>
                            <Icon  name="settings" />
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

  backarrow:{
            color:"#4169e1"
            },
  header:   {
            backgroundColor: "#FFF",
            },
  content: {
            backgroundColor: "#FFF",
            },
  footermb: {
        backgroundColor: "#FFF",
            },
  text:     {
        alignSelf: "center",
        marginBottom: 7
            },
              
    
});


AppRegistry.registerComponent('TLine', () => TLine);