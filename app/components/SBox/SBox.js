import React, { Component } from "react";

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
  Input
} from "native-base";

export default class SBox extends Component {
    render() {
        return (
            <Container style={styles.container}>
               <Header searchBar  style={styles.header}>
                    <Item>
                        <Icon style={styles.backarrow} active name="arrow-back"/>
                        <Input placeholder="TwitterSearch" />
                    </Item>
               </Header>
               <Content style={styles.content} padder/>
               <Footer>
                    <FooterTab style={styles.footermb}>
                        <Button active transparent >
                            <Text style={styles.backarrow}> All  </Text>
                        </Button>
                        <Button transparent>
                            <Text>Mentions</Text>
                        </Button>
                        <Button transparent>
                            <Icon  name="settings" />
                        </Button>
                    </FooterTab>
                </Footer>         
            </Container>
        );
    }
}
const styles = StyleSheet.create({

  backarrow:{
            color:"#4169e1"
            },
  header:   {
            backgroundColor: "#FFF",
            },
  content: {
            backgroundColor: "#e6e6fa",
            },
  footermb: {
        backgroundColor: "#FFF",
            },
    
});


AppRegistry.registerComponent('SBox', () => SBox);