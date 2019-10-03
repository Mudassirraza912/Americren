import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Alert, Image} from 'react-native';
import { Header, Icon, Avatar, Input, Button } from 'react-native-elements';
import firebase from "../../config/firebase"

export default class Privacy extends React.Component {
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
    drawerLabel: 'AMERICREN PRIVACY',
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
              <Text style={{ color: "#fff", left:"10%" }}>Free Monthly News Letter</Text>
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

            <View>
              <View>
                <Text style={styles.Header}>Americren Privacy</Text>
              </View>

              <View>
                <Text style={{ color: "#fff", left: "5%", fontSize: 20 }}>Where America Shops Realtors</Text>
              </View>

          <View style={{display:"flex", flexDirection:"row", width:"100%", top:"4%", left:"1%"}}>

              <View style={{width:"60%", height:"100%", left: "3%"}}>
                <Text style={{ color: "#fff", left: "5%", fontSize: 14, width: "100%" }}>Our privacy policies are simple We will absolutely not give, rent, or sell your information to anyone except the one Realtor you have expressed interest in doing business with. We will take the utmost care with your personal information. It will be encrypted at all times. Our company will try to limit our contact with you to three times unless you request otherwise 

              </Text>
              </View>

              <View style={{width:"50%", height:"100%", top: 10}}>
                    <Image source={require("../../assets/rotate.png")} style={{height:130, width:80, left:"12%", top:"14%"}}/>
              </View>

          </View>

              <View>
              <Text style={{ color: "#fff", left: "6%", fontSize: 14, width: "66%", top:"7%" }}>Finally, if for any reason you want us to lose your information just let us know and we will quickly delete your information from our system.We are here to help you and protecting your personal information is a sacred trust.</Text>

              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>



            </View>


            </View>

          </ImageBackground>
        </ScrollView>

      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    // fontWeight: "bold",
    fontSize: 40,
    color: "#fff",
    left: "5%"
  },
});
