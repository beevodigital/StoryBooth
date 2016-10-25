const React = require('react');
const ReactNative = require('react-native');
const {
  AppRegistry,
  AlertIOS,
  Navigator,
  NavigatorIOS,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View,
  TextInput,
} = ReactNative;

import Countdown from "./Countdown";
var CountdownOverlay = require('./CountdownOverlay');

class FinalInstructionsPage extends React.Component{
  constructor(props) {
    super(props)

    this.handleEnd = this.handleEnd.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      countdownStarted: false,
    }

  }

  navSecond(){
    this.countdown.stopCountdown();

    this.props.navigator.push({
        id: 'initials',
        passProps: {
              phoneNumber: this.props.phoneNumber
          }
      })

  }

  componentDidMount() {
      this.handleClick();
  }

  handleClick() {
    this.setState({countdownStarted: true});
  }

  handleEnd() {
    this.setState({countdownStarted: false});
    this.props.navigator.push({
      id: 'splashpage'
    })
  }

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.navSecond.bind(this)}>
        <View style={styles.containerWidth}>
        { this.state.countdownStarted
            ? (<Countdown style="display:none" ref={(c) => { this.countdown = c }} onComplete={this.handleEnd} count={30}>
                <CountdownOverlay countdownText={styles.takingPictureCountdownText}/>
              </Countdown>)
            : null }
            <View  style={styles.mainIcons}>
              <Image source={require('./img/WhiteArrow.png')}  style={styles.WhiteArrow}/>
              <Image source={require('./img/WhiteMic.png')}  style={styles.WhiteMic}/>
            </View>
          <View>
            <Text style={styles.subHead}>Once you've recorded your story, it's all set for future Arts@MSP See 18 screnings!</Text>
          </View>
          <View style={styles.flexRow}>
            <Image source={require('./img/WhiteTouch.png')}  style={styles.fingerIcon}/>
            <Text style={styles.CTAtext}>
              Tap Anywhere to continue
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

//<TouchableHighlight onPress={this.navSecond.bind(this)} style={styles.recordButtonContainer}>
//  <Text style={styles.recordButton}>Start Recording</Text>
//</TouchableHighlight>

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25,
    backgroundColor:'#3f85fc'
    //flexDirection:'row'
    //backgroundColor: '#C9C9C9',
  },
  flexRow:{
    flexDirection:'row',
    marginTop:125
  },
  containerWidth:{
    width:800
  },
  mainIcons:{
    flexDirection:'row',
    paddingTop:50
  },
  WhiteArrow:{
    width:150,
    height:150
  },
  WhiteMic:{
    width:150,
    height:150,
    marginLeft:50
  },
  boldHeadline:{
    fontSize:130,
    fontWeight:'bold',
    color:'#3f85fc'
  },
  lightHeadline:{
    fontSize:130,
    color:'#3f85fc'
  },
  subHead:{
    fontSize:60,
    color:'#ffffff',
    fontWeight:'bold',
    marginTop:10
  },
  CTAtext:{
    color:'#ffffff',
    paddingTop:15,
    fontSize:20,
    marginLeft:10
  },
  fingerIcon:{
    width:53,
    height:53
  },
  legalText:{
    fontSize:12,
    color:'#3f85fc'
  },
  mainFont:{
    fontSize:30,
    textAlign:'center'
  },
  whitebackground:{
    backgroundColor: 'rgba(255,255,255,0.9)',
    height:740,
    margin:10,
    padding:10,
    marginTop:20
  },
  halfcolumncontainer:{
    //flexDirection:'row',
    alignItems: 'flex-end'
  },
  wrapText:{
    flexDirection:'column',
    width:600
  },
  columnRight:{
    flex:1,
    flexWrap:'wrap',
    flexDirection:'row'
  },
  phonenumberContainer:{
    //flex:1,
    backgroundColor:'#CCCCCC',
    width:500,
    padding:25,
    margin:25,
    fontSize:20
  },
  phonenumber: {
    width:600,
    height:70,
    borderColor: '#000000',
    borderWidth: 2,
    marginTop:40,
    marginBottom:40,
    padding:5,
    color:'#666666',
    fontSize:30
  },
  phoneNumberError:{
    borderColor:'#FF0000',
    borderWidth:3
  },
  image: {
    width: 100,
    height: 100,
  },
  backgroundImage:{
    flex:1,
    resizeMode:'stretch'
  },

});
module.exports = FinalInstructionsPage;
