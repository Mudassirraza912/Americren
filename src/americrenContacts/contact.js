import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, Alert } from 'react-native';
import { Header, Icon, Avatar, Input, Button } from 'react-native-elements';
import firebase from "../../config/firebase"


export default class Contact extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      currUsrEmai: false,
      getArr: [],
      key: ''
    }
    this.emailCollector = this.emailCollector.bind(this)
  }

  componentWillMount() {
    const { email, currUsrEmai, getArr, key } = this.state

    firebase.database().ref("/emails/").on("child_added", snapShot => {
      var emails = snapShot.val()
      // var getArr = []
      // getArr = emails.email
      var getKey = snapShot.key

      console.log("HFSDGFGAFDG", emails.email, getKey)
      this.setState({ getArr: emails.email, key: getKey })

      // if (getArr.includes(email)) {
      //   this.setState({
      //     currUsrEmai: true
      //   })
      // } else {
      //   this.setState({
      //     currUsrEmai: false
      //   })
      // }
    })

  }



  static navigationOptions = {
    drawerLabel: 'AMERICREN CONTACT',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };


  emailCollector() {
    const { email, currUsrEmai, getArr, key } = this.state
    console.log("KEY KEY KEY KEY", key)

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(reg.test(email) === false ) {

      Alert.alert("Email is Not Correct")
    }else{
      
     
      
    if (getArr.includes(email)) {
      this.setState({ email: "" })
      console.log("WARNING WARNING WARNING WARNING")
          // Toast.show({ text: "Already Exist", buttonText: "Okay", position: "bottom", type: "danger" })
          Alert.alert("Already Exist")
    } else {

      getArr.push(email)

      if(key) {
      firebase.database().ref("/emails/" + key + "/").update({ email: getArr })
    }else{
      firebase.database().ref("/emails/" ).push({ email: getArr })

    }



      this.setState({ email: "" })
      console.log("SUCCES SUCCESSUCCES SUCCES SUCCES")
      // Toast.show({
      //   text: "You are added into our database",
      //   buttonText: "Okay",
      //   type: "warning"
      // })
      Alert.alert("You are added into our database")

    }



    }




  }
  
  render() {
    return (
      <View>
        <View>
          <Header
            containerStyle={{ backgroundColor: "black", borderColor: "black", height: 90, }}
            backgroundColor="black"
            leftComponent={{ icon: 'menu', color: '#fff', onPress: () => { this.props.navigation.toggleDrawer() } }}
            centerComponent={<View>
              <Text style={{ color: "#fff", left:"10%"  }}>Free Monthly News Letter</Text>
              <Input
                value={this.state.email}
                placeholderTextColor="gray"
                placeholder="Enter Your Email Here"
                inputStyle={{ borderColor: "#fff" }}
                onChange={(e) => { this.setState({ email: e.nativeEvent.text }) }}
                containerStyle={{ borderRadius: 20, height: 30, borderColor: "#fff", backgroundColor: '#fff', width: 190 }} />
            </View>}
            rightComponent={<Button containerStyle={{ borderRadius: 20, height: 30 }} buttonStyle={{ backgroundColor: "white", borderRadius: 20 }} titleStyle={{ color: "black" }} title="Submit" onPress={this.emailCollector} />}
          />
        </View >
        <ScrollView>
          <ImageBackground source={require("../../assets/back.jpg")} style={{ height: '100%', width: '100%', }} resizeMethod="auto" resizeMode="stretch">
            <ScrollView>
              <View style={styles.container}>

                <View>
                  <Text style={styles.Header}>Americren</Text>
                </View>

                <View>
                  <Text style={{ color: "#fff", left: "4%",  fontSize: 20 , padding: 10 }}>Where America Shops Realtors</Text>
                </View>

                <View style={{display:"flex", flexDirection:"row", width:"100%"}}>

                <View  style={{width:"60%", height:"100%", left: "5%"}}>

                  <Text style={{ color: "#fff", top: 20, left: "5%", fontSize: 14 }}>Welcome to Americren an acronym for The American Consumer Real Estate Network. Americren is the first and only web site dedicated with quickly and easily connecting the consumer with the top producing Realtor or Real Estate Agent in the consumers marketplace. When we say the top producer we are talking about the one half of one percent top producer in sales. From our feature Realtor Ben Caballero, Addison Tx. who did one point nine billion in sales in 2017. 
                  </Text>

                </View>
                
                <View style={{width:"50%", height:"100%", top: 10}}>
                    <Image source={require("../../assets/rotate.png")} style={{height:130, width:80, left:"12%", top:"14%"}}/>
                </View>

                </View>

                <View>
                  <Text style={{ color: "#fff", top: 20, left: "3%", width: "90%", fontsize: 14, padding: 10 }}>To our lowest Real Estate Agent with about ten million in sales. At Americren we are not affiliated with any Real Estate company making our selection process completely unbiased. Buying or selling a home is the largest most personal transaction of our lives, as a fellow consumer and since it costs the same, i want a top producing Realtor or Real Estate Agent buying or selling my home for me. At Americren we promise to quickly and easily connect you to the very best top producing Realtor or Real Estate Agent in your market.</Text>
                </View>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 10, left:"3%" }}>
                  <Text style={{ color: "#fff", fontSize: 35, top: "3%", width:"100%" }}>Our Featured Realtor</Text>
                  <Image style={{ height: 300, width: 300, top: "4%", padding: 10 }} source={require("../../assets/ben.jpg")} />
                  <Text style={{ color: "#fff",fontSize: 40, padding: 10 }}>Ben Caballero</Text>
                </View>

                <View style={{
                  alignItems: "center", justifyContent: "center", flex: 1, left: "5%"
                }}>
                  <Text style={{ color: "#fff", left: 4, fontsize: 14, justifyContent:"center", alignContent:"center", flex:1  }}>According to Guinness World Records, Ben Caballero, Founder and CEO of HomesUSA.com</Text>
                  <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 40, }}></Text>
                  <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 40, }}></Text>
                  <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 40, }}></Text>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </ScrollView>

      </View>

    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    // backgroundColor: 'blue',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // width: "80%"
  },
  Leftcontainer: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: -20
  },
  Header: {
    // fontWeight: "bold",
    fontSize: 50,
    color: "#fff",
    left: "6%"
  },
  Paragraph: {

  }
});

