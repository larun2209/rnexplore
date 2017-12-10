import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import{
  Container, 
  Header, 
  Title, 
  Left, 
  Icon, 
  Right, 
  Button, 
  Body, 
  Content,
  Text, 
  Card, 
  CardItem 
} from "native-base";




export default class HomeScreen extends Component{
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Hasura Assignment1: Screen Design</Text>
              </Body>
            </CardItem>
          </Card>
           <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}>
            <Text>Goto Profile</Text>
          </Button>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Search")}>
            <Text>Goto Search</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("TimeLine")}>
            <Text>Goto TimeLine</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}


AppRegistry.registerComponent('HomeScreen', () => HomeScreen);