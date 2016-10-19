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

class SplashPage extends React.Component{
  constructor(props) {
    super(props)
  }

  navSecond(){
    this.props.navigator.push({
        id: 'intropage'
      })

  }

  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.navSecond.bind(this)}>
        <View style={styles.containerWidth}>
          <View >
            <Image source={require('./img/SplashIcons.png')}  style={styles.splashIcons}/>
          </View>
          <View>
            <Text style={styles.boldHeadline}>
              Hello!
            </Text>
            <Text style={styles.lightHeadline}>
              !Hola!
            </Text>
          </View>
          <View>
            <Text style={styles.subHead}>Want to make you own shotfilm for See 18, MSP's film screening room?</Text>
          </View>
          <View style={styles.flexRow}>
            <Image source={require('./img/fingerIcon.png')}  style={styles.fingerIcon}/>
            <Text style={styles.CTAtext}>
              Tap Anywhere to start
            </Text>
          </View>
          <View>
            <Text style={styles.legalText}>By agreeing below, you transfer all rights, including the copyright, in your StoryBooth submission to Airport Foundation MSP. You also agree that the Airport Foundation MSP, the Metropolitan Airports Commission, or any successor to either, may display, reproduce, edit and distribute your travel story, including your name, likeness, and any photos taken during your participation in StoryBooth, in all media for any purpose.</Text>
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
    padding:25
    //flexDirection:'row'
    //backgroundColor: '#C9C9C9',
  },
  flexRow:{
    flexDirection:'row',
    marginTop:10,
    marginBottom:15
  },
  containerWidth:{
    width:800
  },
  splashIcons:{
    width:411,
    height:182
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
    color:'#3f85fc'
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
module.exports = SplashPage;
