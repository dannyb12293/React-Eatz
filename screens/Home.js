import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import HeaderTabs from '../Components/home/HeaderTabs'
import SearchBar from '../Components/home/SearchBar'
import Categories from '../Components/home/Categories'
import RestaurantItem, { localRestaurants } from '../Components/home/RestaurantItems'
import {Divider} from 'react-native-elements'
import BottomTabs from '../Components/home/BottomTabs'






const YELP_API_KEY =
"x6Rx7vUSYPacGcCixeL4UlSU8G3Xy-gjEyppQarXjQpb5dBqAyViE_Rxrn28l6_4cAu_GX9ROc56rKONTLl-U5y5YhkvplAUOipKZ_TFAo-BH_alO9xOH_dJwv7jY3Yx"


export default function Home({navigation}) {
    const[restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('Chicago');
    const [activeTab, setActiveTab]= useState('Delivery');

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
    const apiOptions = {
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
        },
    };
        return fetch(yelpUrl, apiOptions)
        .then((res)=> res.json())
         .then(json => setRestaurantData(
            json.businesses.filter((business)=>
            business.transactions.includes(activeTab.toLowerCase())
                )
            )
        );
    };
    useEffect(()=> {
        getRestaurantsFromYelp();
    },
    [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View  style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab= {activeTab} setActiveTab= {setActiveTab}/>
        <SearchBar  cityHandler = {setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Categories />
      <RestaurantItem 
      restaurantData = {restaurantData} navigation ={navigation}
      />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
      
    </SafeAreaView>
  )
}