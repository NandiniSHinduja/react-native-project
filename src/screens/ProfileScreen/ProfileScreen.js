import { View, Text, Image, ScrollView,StyleSheet, ImageBackground } from 'react-native'
import React,{useState} from 'react'
import logo from '../../../assets/images/guvi_logo.png';
import profile from '../../../assets/images/profilepic.jpg';
import dashboard from '../../../assets/images/dashboard.jpg';
import tick from '../../../assets/images/tickmark.png';
import ranking from '../../../assets/images/ranking.png';
import summary from '../../../assets/images/user-summary.png';
import qualification from '../../../assets/images/educational-qualifications.png';
import experience from '../../../assets/images/professional-experience.png';
import portfolio from '../../../assets/images/portfolio.png';
import projects from '../../../assets/images/projects.png';
import skills from '../../../assets/images/skills.png';
import certifications from '../../../assets/images/certifications.png';
import geekcoins from '../../../assets/images/geekcoins.png';
import pen from '../../../assets/images/pen.png';
import SmallButton from '../../components/SmallButton';
import MediumButton from '../../components/MediumButton';

const ProfileScreen = () => {
  return (
    <ScrollView>
    <View style={styles.root}>
    <Image source={logo} style={styles.logo} resizeMode="contain"/>
    <ImageBackground source={dashboard} style={styles.bg}>
    <Image source={profile} style={styles.profile} resizeMode="contain"/>
    <Image source={geekcoins} style={styles.geekcoins}></Image>
    <Image source={ranking} style={styles.ranking}/>
    </ImageBackground>
    <Text style={styles.heading}>Nandini Hinduja                  <Image source={pen}></Image></Text>
    <Text style={styles.subheading}>Email ID <Text style={styles.privacy}>(Private to you) </Text><Image source={tick}></Image><Text style={styles.verified}> Verified</Text></Text>
    <Text style={styles.mail}>nandinihinduja91@gmail.com</Text>
    <View style={styles.bg}>
        <SmallButton text="Download"></SmallButton>
        <SmallButton text="Share Profile"></SmallButton>
    </View>
    <Text style={styles.heading}>Your Stats <Text style={styles.privacy}>(Private to you)</Text></Text>
    <View style={styles.bg}>
    <View style={styles.box}>
        <Text style={styles.boxText}>Total No. of Profile Visits</Text>
        <Text style={styles.count}>0</Text>
    </View>
    <View style={styles.box}>
        <Text style={styles.boxText}>Profile visits by companies</Text>
        <Text style={styles.count}>0</Text>
    </View>
    </View>
    <View style={styles.bg}>
    <View style={styles.box}>
    <Text style={styles.boxText}>No. of ongoing courses</Text>
        <Text style={styles.count}>0</Text>
    </View>
    <View style={styles.box}>
    <Text style={styles.boxText}>No. of courses completed</Text>
        <Text style={styles.count}>0</Text>
    </View>
    </View>
   
    <View style={styles.bigBox}>
        <Text style={styles.boxheading}>Summary
        </Text>
        <Image source={summary} style={styles.logos} ></Image>
        <Text style={styles.bigboxText}>Give us a short idea about who you are, what you like and what you are made of</Text>
        <MediumButton text="Add Summary"></MediumButton>
     </View>
    <View style={styles.bigBox}>
        <Text style={styles.boxheading}>Educational Qualifications
        </Text>
        <Image source={qualification} style={styles.logos} ></Image>
        <Text style={styles.bigboxText}>Share your Educational Qualifications like your University and about your schooling</Text>
        <MediumButton text="Add Qualification"></MediumButton>
    </View>
    <View style={styles.bigBox}>
        <Text style={styles.boxheading}>Professional Experience
        </Text>
        <Image source={experience} style={styles.logos} ></Image>
        <Text style={styles.bigboxText}>Share your Professional Experience and your contribution to the companies you worked</Text>
        <MediumButton text="Add Experience"></MediumButton>
    </View>
    <View style={styles.bigBox}>
        <Text style={styles.boxheading}>Portfolio
        </Text>
        <Image source={portfolio} style={styles.logos} ></Image>
        <Text style={styles.bigboxText}>Share your Portfolio links and Social media links to let potential companies know your capabilities</Text>
        <MediumButton text="Add Portfolio"></MediumButton>
    </View>
    <View style={styles.bigBox}>
        <Text style={styles.boxheading}>Projects
        </Text>
        <Image source={projects} style={styles.logos} ></Image>
        <Text style={styles.bigboxText}>Showcase the amazing projects you did that demonstrate your prowess in coding languages</Text>
        <MediumButton text="Add Project"></MediumButton>
    </View>
    <View style={styles.bigBox}>
        <Text style={styles.boxheading}>Skills & Interests
        </Text>
        <Image source={skills} style={styles.logos} ></Image>
        <Text style={styles.bigboxText}>Share the coding languages you know and other skills you have</Text>
        <MediumButton text="Add Skills and Interest"></MediumButton>
    </View>
    <View style={styles.bigBox}>
        <Text style={styles.boxheading}>Certifications
        </Text>
        <Image source={certifications} style={styles.logos} ></Image>
        <Text style={styles.bigboxText}>Share your achievements and certifications that decorate your hall of fame wall</Text>
        <MediumButton text="Add Certification"></MediumButton>

    </View>
    </View>
    </ScrollView>
  );
};
const styles=StyleSheet.create({
root:{
    backgroundColor:'white',
},
bigBox:{
    width:350,
    height:350,
    backgroundColor:'#d3d3d3',
    alignSelf:'center',
    marginTop:20,
},
boxheading:{
    fontSize:24,
    fontWeight:'bold',
    margin:20,
},
bigboxText:{
    marginBottom:20,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    textAlign:'center',
    alignSelf:'center',
    fontSize:16,
    fontWeight:'bold',
},
count:{
    color:'#32CD32',
    alignSelf:'center',
    fontSize:20,
    fontWeight:'bold',
},
boxText:{
    alignSelf:'center',
    marginTop:50,
    fontSize:16,
    fontWeight:'bold',
},
box:{
    backgroundColor:'#d3d3d3',
    width:165,
    height:165,
    marginTop:20,
    marginLeft:20,
},
bg:{
    flexDirection:'row',
},
ranking:{
    marginTop:60,
    marginLeft:20,
},
logo:{
    width:100,
    alignSelf:'center',
    height:50,
},
logos:{
    alignSelf:'center',
},
geekcoins:{
    marginTop:60,
    width:25,
    height:25,
    marginLeft:230,
},
profile:{
    width:50,
    height:50,
    marginStart:20,
    marginTop:50,
},
mail:{
    fontSize:18,
    color:'black',
    marginStart:20,
    marginTop:10,
},
heading:{
    fontSize:28,
    fontWeight:'bold',
    color:'black',
    marginStart:20,
    marginTop:20,
},
subheading:{
    color:'#d3d3d3',
    marginStart:20,
    marginTop:10,
},
privacy:{
    marginTop:10,
    fontSize:10,
    color:'#d3d3d3',
},
verified:{
    color:'green',
    marginTop:12,
},

baseText:{
    fontSize:28,
    color:"black",
    marginBottom:50,
},
})

export default ProfileScreen;