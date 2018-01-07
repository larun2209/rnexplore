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
  Input,
  Card,
  CardItem
} from "native-base";

import { getSearchList } from '../hasuraApi';

export default class SBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            articleList: [],
            searchTextBox : '',
              
          }
      }

    handleSearchChange = searchTextBox => {
        this.setState({
            ...this.state,
            searchTextBox: searchTextBox
        })
    }

    handleSearchPressed = async () => {
        let articleList = await getSearchList(this.state.searchTextBox);
        
        
        if(articleList.status === 200){
          articleListJson = await articleList.json();
          this.setState({
          articleList: await articleListJson
          });
          
        }
        else {
          if (articleList.status === 504) {
            Alert.alert('Network error', 'Check your internet connection');
          } else {
            Alert.alert('Something went wrong', 'Please check table permissions and your internet connection')
          }
        }
      }
    render() {
        const showList = () => {
            return this.state.articleList.map((article, i) => {
              
              return (
                <Card key={i}>
                  <CardItem >
                    <Text> {article.title} </Text>
                  </CardItem>
                </Card>
              );
            });
          };
        return (
            <Container style={styles.container}>
               <Header searchBar  style={styles.header}>
                    <Item>
                        <Icon style={styles.backarrow} active name="arrow-back"/>
                        <Input placeholder="TwitterSearch" value={this.state.searchTextBox} onChangeText={this.handleSearchChange} />
                        <Button transparent onPress={this.handleSearchPressed}>
                            <Text>Search</Text>
                        </Button>
                    </Item>
                    
               </Header>
               <Content style={styles.content} padder>
               {showList()}
               </Content>
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