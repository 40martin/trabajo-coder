import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import categories from "../data/categories.json"
import FlatCard from '../components/FlatCard'

const CategoriesScreen = ({setCategory}) => {

      const renderCategoryItem = ({item}) => {
        return(
          <Pressable onPress={()=>setCategory(item.title)}>
          <FlatCard style={styles.categoryItemContainer}>
              <Image
                  source={{uri:item.image}}
                  style={styles.image}
                  resizeMode='contain'
              />
              <Text style={styles.categoryTitle}>{item.title}</Text>
          </FlatCard>
          </Pressable>
        )
      }

  
  
  return (
    
          <FlatList
          data={categories}
          keyExtractor={item=>item.id}
          renderItem={renderCategoryItem}
          />
    
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  
  categoryItemContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
  },

  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  image: {
    width: 100,
    height: 100,
  },
})