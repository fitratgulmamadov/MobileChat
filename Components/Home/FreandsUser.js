import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import { Container } from './styles';

const FreUser = ({navigation}) => {
  return (
  <View style={styleFre.container}>
  <ScrollView >
    <View style={styleFre.scrollY}>

    <TouchableOpacity onPress={()=> navigation.navigate('MessagePage')}>

     <View style={styleFre.block}>
     <Image source={require('../../assets/icon.png')} style={styleFre.photo}
      />
    <Text >Named</Text> 
     </View>
    </TouchableOpacity>
    <TouchableOpacity>

     <View style={styleFre.block}>
     <Image source={require('../../assets/icon.png')} style={styleFre.photo}
      />
    <Text >Named</Text> 
     </View>
    </TouchableOpacity>
    <TouchableOpacity>

     <View style={styleFre.block}>
     <Image source={require('../../assets/icon.png')} style={styleFre.photo}
      />
    <Text >Named</Text> 
     </View>
    </TouchableOpacity>
    <TouchableOpacity>

     <View style={styleFre.block}>
     <Image source={require('../../assets/icon.png')} style={styleFre.photo}
      />
    <Text >Named</Text> 
     </View>
    </TouchableOpacity>
    <TouchableOpacity>

     <View style={styleFre.block}>
     <Image source={require('../../assets/icon.png')} style={styleFre.photo}
      />
    <Text >Named</Text> 
     </View>
    </TouchableOpacity>
    <TouchableOpacity>

     <View style={styleFre.block}>
     <Image source={require('../../assets/icon.png')} style={styleFre.photo}
      />
    <Text >Named</Text> 
     </View>
    </TouchableOpacity>
    <TouchableOpacity>

     <View style={styleFre.block}>
     <Image source={require('../../assets/icon.png')} style={styleFre.photo}
      />
    <Text >Named</Text> 
     </View>
    </TouchableOpacity>
    <TouchableOpacity>

     <View style={styleFre.block}>
     <Image source={require('../../assets/icon.png')} style={styleFre.photo}
      />
    <Text >Named</Text> 
     </View>
    </TouchableOpacity>
    <TouchableOpacity>

     <View style={styleFre.block}>
     <Image source={require('../../assets/icon.png')} style={styleFre.photo}
      />
    <Text >Named</Text> 
     </View>
    </TouchableOpacity>
    </View> 
  </ScrollView>
  </View>
  )
} 

export default FreUser;

const styleFre  = StyleSheet.create({
    container: {  
        paddingVertical: 20,
    }, 
    block: {
    alignItems: 'center',
     marginTop: 10,
     marginBottom: 10,
     flexDirection: 'row',
     gap: 20,
     paddingHorizontal: 10,
    },
    photo: {
      width: 80,
      height: 80,
      borderRadius: 50
    },
    itemText: {
        
    },
    scrollY: {
        paddingBottom: 400
    }
})