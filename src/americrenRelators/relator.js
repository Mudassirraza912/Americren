import React from 'react';
import { Header, Icon, Avatar, Input, Button } from 'react-native-elements';
import { StyleSheet, Text, View, WebView, Alert  } from 'react-native';
// import {WebView} from "expo"
import firebase from "../../config/firebase"



export default class Relators extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://www.americren.com/map/americren_realtor.php',
      email: "",
      currUsrEmai: false,
      getArr: [],
      key: '',
      webKey: 1
    }
    this.emailCollector = this.emailCollector.bind(this)
  }

  componentDidMount = () => {
    console.log("hello**************")
    this.setState({ url: 'https://www.americren.com/map/americren_realtor.php' })

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

  componentWillUnmount() {
    console.log('willUnmount')
  }

  componentWillMount() {
    console.log("hello************** will mount")
    this.setState({ url: 'https://www.americren.com/map/americren_realtor.php' })

    console.log("componentWillMount componentWillMount componentWillMount componentWillMount")
    fetch("https://www.americren.com/map/americren_realtor.php")
      .then(function (response) {
        return response.json();
        console.log("MAP MAP MAP MAP MAP ", response)
      })
      .then(function (myJson) {
        console.log(JSON.stringify(myJson));
        console.log("AFTER AFTERMAP MAP MAP MAP MAP ", response)

      });
  }
  static navigationOptions = {
    drawerLabel: 'AMERICREN REALTORS',
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


  // back() {
  //   const {webKey} = this.state

  //   if(webKey === 1) {
  //     this.props.navigation.goBack()
  //   }
 
  //   () => {this.setState({webKey: this.state.webKey + 1 }); console.log('hello')}
  // }



  render() {
    return (
      <View style={{ flex: 1 }}>
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

        <View style={{ flex: 1, backgroundColor: 'blue' }}>
          <Button icon="arrow-back" buttonStyle={{backgroundColor:"blue"}} titleStyle={{color: "#fff"}} title="Reload Map" onPress={() => {this.setState({webKey : this.state.webKey + 1})}} />
          <WebView key={this.state.webKey} source={{ uri: this.state.url }}/>
        </View>

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
});
