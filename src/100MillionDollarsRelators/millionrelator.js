import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, Alert } from 'react-native';
import { Header, Icon, Avatar, Input, Button } from 'react-native-elements';
import firebase from "../../config/firebase"

export default class MillionRelators extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      currUsrEmai: false,
      getArr: [],
      key: '',
      eligible: false,
      acronym: false
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
    drawerLabel: '100 MILLION DOLLARS REALTORS',
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
    const { eligible, acronym } = this.state
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
          <ImageBackground source={require("../../assets/back.jpg")} style={{ height: '100%', width: '100%', }} >

            <View>
              <Text style={styles.Header}>Americren Hundred Million Dollar Club</Text>
            </View>

            <View>
              <Text style={{ color: "#fff", left: "5%", fontSize: 20 }}>Where America Shops Realtors</Text>
            </View>

            <View>

              <View style={{ alignItems: "center", justifyContent: "center", flex: 1, top: 10 }}>
                <Button title="WHO IS ELIGIBLE TO JOIN" icon={{
                  name: "keyboard-arrow-down",
                  size: 15,
                  color: "white"
                }} iconRight containerStyle={{ width: "80%", backgroundColor: "blue" }} buttonStyle={{ backgroundColor: "blue" }} onPress={() => {
                  this.setState({
                    eligible: !eligible
                  })
                }} />
              </View>
              {!!eligible &&
                <View>
                  <Text style={{ color: "#fff", left: "5%", fontSize: 14, width: "90%", top: 10 }}>Who is eligible to join:
  Any Realtor or Real Estate Agent with a hundred million dollars or more in sales during 2017 or 2018 is eligible to join our Hundred Million Dollar Club
  
  Whats in it for the Realtor or Real Estate Agent or what does the Realtor or Real Estate Agent get:?
  
  Our Hundred Million Dollar Club Realtors or Real Estate Agents will get the following:
  
  1) Exclusivity for life in their marketplace. From now on and forever our Hundred Million Dollar Club Realtors or Real Estate Agents will have absolute exclucity in their marketplace and neighborhoods where they do business;
  
  2) Hundred Million Dollar Club Member Realtor or Real Estate Agent referral to another Hundred Million Dollar Club Realtor or Real Estate Agent Free
  
  3) Americren referral to Americren Hundred million Dollar Club Member Free for Two Years.after which industry standard referral rates apply;
  
  4) Recognition: Each Americren Hundred Million Dollar Club Member will be given a Crystal Trophy for their office acknowledging your accomplishment as a Hundred Million Dollar Club Member.
  
  5) Acknowledgement: Each Americren Hundred Million Dollar Club Member will receive a full color full page ad in the Real Estate Section announcing to the Realtor or Real Estate Agents marketplace their full stature. each advertisement shall include the Realtors and if the Realtor so desires some of his or her colleagues
  
  6) Free admission as an Americren Ambassador.
  
  7) a free web page announcing them as an Americren Hundred Million Dollar Club Winner and member;
  
  8) a free web page where our Americren Hundred Million Dollar Club Member can sell his or her own books tapes, cd, dvds or complete systems. (the realtor must pay for his or her own merchant account) other restrictions apply.
  
  9) Americren Hundred Million Dollar Club Members will receive discount advertising rates in our ezine so they can advertise their systems to the other 3.1 million other real estate Agents. and sell their cds dvds videos etc.
  
  10) Free subscription to our Ezine
  
  11) Other Americren Hundred Million Dollar Club Member Requirements.At Americren we realize thet without our top producing Realtors or Real Estate Agents we would have no program and thus no way to help our consumers. With that in mind we are trying our best to require as little as possible from our Realtors
              </Text>
                </View>}

            </View>


            <View>

              <View style={{ alignItems: "center", justifyContent: "center", flex: 1, top: 15 }}>
                <Button title="OUR NAME AMERICREN IS AN ACRONYM FOR" icon={{
                  name: "keyboard-arrow-down",
                  size: 15,
                  color: "white"
                }} iconRight containerStyle={{ width: "80%", backgroundColor: "blue" }} buttonStyle={{ backgroundColor: "blue" }} onPress={() => {
                  this.setState({
                    acronym: !acronym
                  })
                }} />
              </View>
              {!!acronym &&
                <View>
                  <Text style={{ color: "#fff", left: "5%", fontSize: 14, width: "90%", top: 10 }}>Our name Americren is an acronym for: 
The American Consumer Real Estate Network. That being said, our entire goal is an awesome experience for our consumer that keeps them praising their experience with us as well as converting them as customers for life. And of course our customers for life are also your customers for life. We will require a nominal one time fee for lifetime membership into our Americren Hundred Million Dollar Club Membership program. the details of this one time fee will remain confidential between the Realtor or Real Estate Agent and Americren. 

However, the other details of this agreement will not: So without further adieu; 

1) One time undisclosed fee; 

2) we require our Americren Hundred Million Dollar Club Members to provide quarterly, an article, anecdote, quip, or story for direct publication into the Americren Ezine. This is adcentive for the other 3.1 million Realtors or Real Estate Agents to subscribe and learn from our Team. It is imperative that Americren Hundred Million Dollar Club Members provide top notch content so that we may continue to educate our readers and our up and coming Realtors and Real Estate Agents. It all works hand in hand our Realtors produce top content, We help provide it to the other 3.1 million Realtors. They buy it and become better. 

3) Americren Hundred Million Dollar Club Members will be provided with two joint logos,which he or she will include one of them in all of their print advertising this logo will direct people to the realtors web page at americren.com/**** the Realtors address. The other logo the Americren Hundred Million Dollar Club Member logo will be posted somewhere on the Realtors own web site pointing to the Realtors web page at amercren.com/****. The asterisks will be replaced with the Realtors own page. 

4) Americren Hundred Million Dollar Club Members agree to teach at future Americren two and three day seminars as is equally convenient to both parties. Schedules and compensation to be determined in the future.
</Text>
                </View>}

            </View>


            <View style={{flex:1 , alignContent:"center", alignItems:"center", top: "1%"}}>


              <Image source={require("../../assets/million.png")} style={{height:350, width: 220, top: 20}}/>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>
              <Text></Text>


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
