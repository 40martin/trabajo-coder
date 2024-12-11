import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import products from '../data/products.json'
import FlatCard from '../components/FlatCard'
import { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ProductsScreen = ({category, setCategory}) => {
    const [productsFiltered, setProductsFiltered] = useState([])

    useEffect(()=>{
        const productsTempFiltered = products.filter(product=>product.category.toLowerCase() === category.toLowerCase())
        setProductsFiltered(productsTempFiltered)
    },[category])
        
    const renderProductItem = ({item}) => {
        return(
            <FlatCard style={styles.productContainer}>
                <View>
                    <Image
                        source={{uri:item.mainImage}}
                        style={styles.productImage}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.productDescription}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.shortDescription}>{item.shortDescription}</Text>
                <View style={styles.tags}>
                    <Text style={styles.tagText}>Tags : </Text>
                
                {
                    
                        <FlatList
                        style={styles.tags}
                        data={item.tags}
                        keyExtractor={()=>Math.random()}
                        renderItem={({item})=>(<Text style={styles.tagText}>{item}</Text>)}
                    />
                }
                </View>

                    {
                        item.discount > 0 && <View style={styles.discount}><Text style={styles.discountText}>Descuento {item.discount} %</Text></View>
                    }

                    {
                        item.stock <= 0 && <Text style={styles.noStockText}>Sin Stock</Text>
                    }

                    <Text style={styles.price}>Precio: $ {item.price}</Text>
                </View>
          </FlatCard>
        )
    }
  
  
    return (
        <>
        <Pressable onPress={()=>setCategory('')}><Icon style={styles.goBack} name='arrow-back-ios' size={30} /></Pressable>
        <FlatList
        data={productsFiltered}
        keyExtractor={item=>item.id}
        renderItem={renderProductItem}
    />
        </>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    productContainer:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
        margin:10,
        alignItems:'center',
        gap:10,
    },

    productImage:{
        width:70,
        height:70,
    },

    productDescription:{
        width:'75%',
        padding:10,
        gap:5,
    },

    productTitle:{
        fontFamily: 'Montserrat',
        fontWeight:'700',
        fontSize:16,
    },

    tags:{
        flexDirection:'row',
        gap:5,
    },

    tagText:{
        fontWeight:'600',
        fontSize:15,
        color:'red',
    },

    price:{
        fontWeight:'700',
        fontSize:16,
    },

    discount:{
        backgroundColor:'red',
        padding:5,
        borderRadius:5,
        alignSelf:'flex-start',
    },

    discountText:{
        color:'white',
        fontWeight:'700',
    },

    noStockText:{
        color:'red',
        fontWeight:'700',
    },

    goBack:{
        margin:10,
        color:'black',
    }
})