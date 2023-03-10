import { View,Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import LottieView from 'lottie-react-native'
import MenuItems from '../Components/restaurantDetail/MenuItems'
import firebase from '../firebase'



export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({items: [
    {
    title: 'Mesa Tacos ',
    description: 'FAJITA CHICKEN & HOUSEMADE CHORIZO, dirty potatoes, sour cream, jack & cheddar, cilantro and chipotle ranch',
    price: '$3.00 ',
    image: 'https://capitaltacos.com/wp-content/uploads/2021/05/04-Double-mesa-Taco-Resized.jpg'
    }
  ]})
    const {items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
        );


const total = items 
.map((item) => Number(item.price.replace('$', "")))
.reduce((prev, curr) => prev + curr, 0);

const totalUSD = total.toLocaleString( 'en', {
    style:'currency',
    currency: "USD",
});

useEffect(() => {
  const db = firebase.firestore();
  const unsubscribe = db.collection('orders')
  .orderBy('createdAt', 'desc')
  .limit(1)
  .onSnapshot((snapshot) => {
    snapshot.docs.map((doc) =>{
      setLastOrder(doc.data());
    });
  });
  return () => unsubscribe();
}, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View 
        style={{
          margin: 15,
          alignItems: 'center',
          height: '100%'
      }}
       >
      <LottieView 
      style= {{height: 100, alignSelf: 'center', marginBottom: 30 }}
      source={require("../assets/animations/check-mark.json")}
      autoPlay
      speed={0.5}
      loop={false} 
      />
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Your order at {restaurantName} has been placed for {totalUSD}  </Text>
      <ScrollView>
      <MenuItems foods={lastOrder.items} hideCheckBox={true} marginLeft={10} />
      <LottieView 
      style= {{height: 200, alignSelf: 'center' }}
      source={require("../assets/animations/cooking.json")}
      autoPlay
      speed={0.5}
      loop={false} 
      />
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}
