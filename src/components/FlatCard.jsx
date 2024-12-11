import { StyleSheet, Text, View } from 'react-native'


const FlatCard = ({children,style}) => {
  return (
    <View style={{...styles.cardContainer,...style}}>
        {children}
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'yellow',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 8,
        shadowOffset: {width: 4, height: 5},
        elevation: 5,
        },
})