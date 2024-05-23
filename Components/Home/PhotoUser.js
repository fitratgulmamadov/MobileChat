import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';

const PhotoUser = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={stylesImage.scrollBlock}>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      <View style={stylesImage.block}>
        
        <Image source={require('../../assets/icon.png')} style={stylesImage.photo}
      />
      <Text style={stylesImage.text}>Name</Text>
      </View>
      </ScrollView>
    </View>
    );
}

export default PhotoUser;

const stylesImage = StyleSheet.create({
    container: { 
       
    },
    scrollBlock: {
      gap: 20,
    },
    block: {
      width: 80,
      overflow: 'hidden',
      marginLeft: 10,
      marginVertical: 10
    },
    photo: {
         width: 80,
         height: 80,
         borderRadius: 50
    },
    text:{
        textAlign: 'center',
       
    }
  });