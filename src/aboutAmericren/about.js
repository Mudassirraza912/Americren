import React from 'react';
import { StyleSheet, Text, View, ImageBackground,ScrollView, Alert, Image } from 'react-native';
import { Header, Icon, Avata, Input, Button, ButtonGroup } from 'react-native-elements';
import firebase from "../../config/firebase"

export default class About extends React.Component  {
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
    drawerLabel: 'ABOUT AMERICREN',
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

      <View > 
         <Text style={styles.Header}>
           About Americren
         </Text>
      </View>


      <View>
         <Text style={{color:"#fff", left:"7%", fontSize:15}}>
         Where America Shops Realtors
         </Text>
      </View>

      <View style={{display:"flex", flexDirection:"row", width:"100%", left:"1%"}}>

      <View style={{width:"70%", height:"100%",}}>
         <Text style={{color:"#fff", left:"5%", fontSize:15, width: "100%", top: "3%" }}>
         Americren was created by consumers stemming from a horrible experience with a Real Estate Agent. We entered into a lease option agreement with a landlord who also happened to be a Real Estate Agent. And having lived in the home for aout eighteen months building a sizable amount of equity, we decided to use a technique we learned from President Trump's book, "No Down Payment". We decided to use the double escrow, effectively buying and selling the home at the same time, pulling the equity out in cash. However the owner/ Real Estate Agent that we were under contract with, kept refusing to come to escrow and close the deal as agreed. He literally refused to show up for the closings, and we lost buyer after buyer. We became very frustrated as we were sure the equity was going to get away from us, and the equity was quite substantial, just because of a greedy dishonest owner/Real Estate Agent. It was then that we discovered Scottsdale Luxury Properties, who immediately filed a lawsuit on our behalf against the owner/Agent. The court quickly ruled in our favor, proclaiming the lease option legal and binding and further ruling that the owner/agent had acted improperly and that because he was a licensed Real Estate Agent he should be held to a higher standard. After that everything was easy, Scottsdale Luxury Properties, Scottsdale, AZ. stepped in and handled everything, We got our equity, and learned a valuable lesson about only dealing with the most qualified top producing Realtors in this country. 
         </Text>
      </View>

      <View style={{width:"20%", height:"100%"}}>
                    <Image source={require("../../assets/rotate.png")} style={{height:130, width:80, top:"4%", left:"13%"}}/>
      </View>


      </View>

      <View>
         <Text style={{color:"#fff", left:"8%", fontSize:15, width: "90%",top: "12%"  }}>
         We then began to speak to other consumers and every one of them had some kind of nightmare story about Real Estate, The more We spoke to consumers the worse it got and bye the time we finished investigating six out of ten consumers, either had their own nightmare or had heard of some kind of horror experience. Stories that ranged from first time Real Estate Agents who lied about their experience, to inexperienced Real Estate Agents who list your home below market value, just so the agent can get a quick flip, quick numbers, and a quick commission.
         </Text>
      </View>

      <View>
         <Text style={{color:"#fff", left:"8%", fontSize:15, width: "90%", top: "9%" }}>
         The complaint that we heard most ofton from consumers is how they feel completely helpless once they've signed the contract only to find out the Real Estate Agent they signed over their future to, is either worthless or at least inexperienced and sub par, they feel like they are stuck. Once they realize the Real Estate Agent is ether lying to them or will not listen to them They become as frustrated as we were waiting those many months trying to get our home sold. That is when and how Americren was born and for ten years we have been slowly putting Americren together. We at Americren believe that the largest most important transaction of your life should, for the sake of the consumer, be handled by the most Qualified Realtor or Real Estate Professional in your marketplace. We believe that is the top producing Realtor. To that end here you will be able to quickly and easily connect with the top producing Realtor or Real Estate Agent in your market place. So welcome to our ride its gonna be a great one, making Americren a household name. 

         </Text>
      </View>

      <View>
         <Text style={{color:"#fff", left:"8%", fontSize:15, width: "90%", top: "22%" }}>
         P.S. The money (cost) that you pay the hapless real estate agent is the same price that you would pay a Top Producing most qualified Realtor.
         </Text>

         <Text></Text>
         <Text></Text>
         <Text></Text>
         <Text></Text>
         <Text></Text>
         <Text></Text>

      </View>

      <View>
         <Text style={{color:"#fff", left:"3%", fontSize:15, width: "70%", }}>
        
         </Text>
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
    fontSize: 30,
    color: "#fff",
    left: "7%"
  },
});
