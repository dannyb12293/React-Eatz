import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import reactDom from 'react-dom';

export const localRestaurants = [
    {
       name: "Marcos Coffee",
       image_url: "https://cdn.pixabay.com/photo/2016/11/29/12/54/cafe-1869656__340.jpg",
       categories:["Cafe"],
       price:"$$",
       reviews: "984",
       rating:"4.5" 
    },
    {
        name: "Teddys Burgers",
       image_url: "https://www.traveliowa.com/userdocs/modulepage/ogimages/b_c.jpg",
       categories:["American", "Bar"],
       price:"$$",
       reviews: "1045",
       rating:"4.6" 
    },
    {
        name: "Taco Bar",
       image_url: "https://s3-media0.fl.yelpcdn.com/bphoto/pTMeW4_VYspd3M36-GK8JQ/348s.jpg",
       categories:["Mexican", "Bar"],
       price:"$$",
       reviews: "1234",
       rating:"4.9" 
    },

]


export default function RestaurantItems({navigation, ...props}) {
  return (
    <>
    {props.restaurantData.map((restaurant, index) =>(
    <TouchableOpacity
    key={index}
     activeOpacity={1} 
    style={{ marginBottom: 30 }} 
    onPress= {()=> navigation.navigate("RestaurantDetail", {
      name: restaurant.name,
      image: restaurant.image_url,
      price: restaurant.price,
      reviews: restaurant.review_count,
      rating: restaurant.rating,
      categories: restaurant.categories,
    
    })
  }
    >
    <View
     style= {{ marginTop:10, padding: 15, backgroundColor: "white" }}
     >
     <RestaurantImage image={restaurant.image_url} />
     <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
    </View>
    </TouchableOpacity>
    )
    )}
    
    </>
  );
}

const RestaurantImage = (props) => (
    <>
    <Image 
      source={{
        uri: props.image
      }}
      style={{ width: "100%", height: 180}}
      />
      <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
        <MaterialCommunityIcons name='heart-outline' size={25} color= '#eee'></MaterialCommunityIcons>
      </TouchableOpacity>
      </>
);

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop: 10
    }}
    >
    <View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            {props.name}
        </Text>
        <Text style= {{fontSize:13, color: 'gray'}}>30-45 Mins</Text>
    </View>
    <View 
        style={{
            backgroundColor: '#eee', 
            height: 30, 
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            }}
            >
    <Text>{props.rating}</Text>
    </View>
    </View>
)