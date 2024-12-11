import { StyleSheet, Text, View } from 'react-native'


const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Martin Compras Coto</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },

    title: {
        fontSize: 20,
        //fontWeight: 'bold',
        color: 'white',
        fontFamily: 'PressStart2P',
    },
})