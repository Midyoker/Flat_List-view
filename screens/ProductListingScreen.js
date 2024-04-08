import { FlatList, StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';

const ProductListingScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect (() => {
    getProducts();
  },[]);
  

  const getProducts = () => {
    const URL = "https://fakestoreapi.com/Products"
     fetch(URL)
     .then( res =>{
       return res.json();
     })
     .then( data =>{
      setProducts(data);
      console.log("=======>", JSON.stringify(data, null, 4));
     });  

  };

  const renderItem = (item) =>{
    return (
      <View style = {styles.cardContainer}>
          <Image source={{uri: item.image}} style = {{height:100, width:100}} />
          
           <Text style = {{fontSize: 18 ,textAlign:'center', justifyContent:'center'} }>
            {item.price}
           </Text>
           <Text style = {{fontSize: 18 ,textAlign:'center', justifyContent:'center'} }>
            {item.rate}
           </Text>

        </View>
    )
  }
  return(
    <View>
      <Text>ProductListingScreen</Text>
      
      <FlatList
      data = {products}
      renderItem  = {( {item} ) => renderItem(item)}
        />
      <FlatList
      data = {products}
      renderItem  = {( {item} ) => renderItem(item)}
        />
        
    </View>

  );
};

export default ProductListingScreen

const styles = StyleSheet.create({
  cardContainer:{
    backgroundColor: "#fff",
    borderRadius: 40,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: '0', height: '2'},
    marginTop: 10,
    shadowRadius: 4,

  },
  image:{
    height: 20,
    width: 20  ,
  },
  errorStyle:{
    color: "red",
    fontSize: 20,
  },
});