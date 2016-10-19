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

class ThankYouPage extends React.Component{
  constructor(props) {

    super(props);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      currentTime: 0.0,
      recording: false,
      stoppedRecording: false,
      stoppedPlaying: false,
      playing: false,
      finished: false,
      countdownStarted: false,
    }

  }

  componentDidMount() {
      this.handleClick();
  }

  handleClick() {
    this.setState({countdownStarted: true});
  }

  render() {
    return (
      <TouchableHighlight style={styles.container}>
        <View style={styles.containerWidth}>
        { this.state.countdownStarted
            ? (<Countdown style="display:none" ref={(c) => { this.countdown = c }} onComplete={this.handleEnd} count={15}>
                <CountdownOverlay countdownText={styles.takingPictureCountdownText}/>
              </Countdown>)
            : null }
          <View >
            <Image source={require('./img/enterPhoneArrow.png')}  style={styles.splashIcons}/>
          </View>
          <View>
            <Text style={styles.boldHeadline}>
              Thank
            </Text>
            <Text style={styles.boldHeadline}>
              You!
            </Text>
          </View>
          <View>
            <Text style={styles.subHead}>Look for your travel story next time you're at the MSP airport!</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  //handle timer events
  handleEnd() {
    this.setState({countdownStarted: false});
    this.props.navigator.push({
      id: 'splashpage'
    })
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25
    //flexDirection:'row'
    //backgroundColor: '#C9C9C9',
  },
  flexRow:{
    flexDirection:'row'
  },
  containerWidth:{
    width:800
  },
  splashIcons:{
    width:161,
    height:166
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
    fontSize:40,
    color:'#3f85fc',
    marginBottom:75
  },
  CTAtext:{
    color:'#3f85fc',
    paddingTop:15,
    fontSize:20
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

module.exports = ThankYouPage;
