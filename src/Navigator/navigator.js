import React from 'react';
import { createDrawerNavigator, DrawerItems, createAppContainer, SafeAreaView } from "react-navigation";
import * as Screens from '../Screen/screen';
import {Container, Content, Header, Body, Icon} from "native-base"
import {Image, StyleSheet} from "react-native"



const CostumDrawerContentComponent = (props) => (

    <Container style={{flex: 1}}>
        <Header style={{height: 260,backgroundColor: "gray", borderBottomColor: "gray"}}>
            <Body>
                <Image style={{width: "100%", height: 270, marginRight: 30, padding:30, flexDirection:"row"}} source={require("../../assets/drawerLogo.jpg")}/>
            </Body>
        </Header>
        <Content style={{backgroundColor:"gray"}}>
                <DrawerItems itemStyle={{borderBottomColor: "white", borderBottomWidth: 1}} activeTintColor="black" activeBackgroundColor="gray" inactiveBackgroundColor="gray" {...props}/>
        </Content>
    </Container>
   

)

const DrawerNavigator = createDrawerNavigator(
    {
        AMERICREN: {
            screen: Screens.Americren,
        },
        "AMERICREN REALTORS": {
            screen: Screens.Relators,
        },
        "100 MILLION DOLLARS REALTORS": {
            screen: Screens.MillionRelators,
        },
        "AMERICREN AMBASSADOR": {
            screen: Screens.Ambassador,
        }, 
        "ABOUT AMERICREN": {
            screen: Screens.About,
        }, 
        "AMERICREN E-Zine": {
            screen: Screens.Zine,
        },    
        "AMERICREN EDUCATION": {
            screen: Screens.Education,
        }, 
        "AMERICREN PRIVACY": {
            screen: Screens.Privacy,
        }, 
        "AMERICREN CONTACT": {
            screen: Screens.Contact,
        }

    },
    {
        initialRouteName: 'AMERICREN',
        contentComponent: CostumDrawerContentComponent,
        drawerBackgroundColor: 'gray',
        contentOptions: {
            activeBackgroundColor: 'gray',
            activeTintColor: 'black',
            style: {
                borderBottomColor: 'orange',
                borderBottomWidth: 4
            },
            inactiveTintColor: '#ffff'
        }

        
    }

)

const Navigator = createAppContainer(DrawerNavigator)

styles = StyleSheet.create({
    drawerNavigator: {
        height: 150,
        // width: 150,
        // radius: 75
    }
})

export default Navigator

