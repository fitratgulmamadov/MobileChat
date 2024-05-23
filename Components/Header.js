import { StyleSheet, Text, View } from 'react-native'; 

const Header = () => {
 return (
  <View style={stylesHeader.container}>
   <Text style={stylesHeader.headerText}>My Messenger</Text>
  </View>
 )
}
export default Header
const stylesHeader = StyleSheet.create({
    container: { 
      backgroundColor: '#0bf13d',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '10px',
    //   paddingVertical: 30,
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 10,
      flexDirection: 'row',
    },
    headerText: {
        // flex: 1,
        flexDirection: 'row',
        fontSize: 18,
        color:'white'
    }
  });