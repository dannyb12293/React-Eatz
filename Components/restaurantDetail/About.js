import { View, Text, Image } from 'react-native'
import React from 'react'

// HARD COODED RESTAURANT INFO
// const yelpRestaurantInfo = {
//     name:"Locos Tacos",
//     image:"https://www.visitstpeteclearwater.com/sites/default/files/styles/large_horizontal_wide/public/2022-05/el-huarache-veloz-pinellas-park-lrg.jpg?h=596bb1f0&itok=swYWwI6l",
//     reviews:'3500',
//     rating: 4.8,
//     categories: [
//         {title:' Comfort '}, 
//         {title:' Mexican '}
//     ]
// };


// const image =
// "https://www.visitstpeteclearwater.com/sites/default/files/styles/large_horizontal_wide/public/2022-05/el-huarache-veloz-pinellas-park-lrg.jpg?h=596bb1f0&itok=swYWwI6l"

// const title = 'LOCOS TACOS'
// const description = 'Mexican * Comfort Food * $$ * 4* * (3089+)'



export default function About(props) {
    const {name, image, price, reviews, rating, categories} = 
    props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join('•');

    const description = `${formattedCategories} ${price ? ' • '+ price : ' '} •  💳  • ${rating} ⭐️ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image= {image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source ={{ uri: props.image}} style={{width: '100%', height: 180 }} />
)

const RestaurantName = (props) =>( <Text
    style={{
        fontSize: 29,
        fontWeight:'600',
        marginTop: 10,
        marginHorizontal: 15,
    }}
>
    {props.name}
</Text>
);

const RestaurantDescription = (props) => <Text style={{
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5

    
}}>
    {props.description}
</Text>


