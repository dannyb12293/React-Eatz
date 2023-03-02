import { View, Text } from 'react-native'
import React from 'react'
import {Divider} from 'react-native-elements'
import About from '../Components/restaurantDetail/About'
import MenuItems from '../Components/restaurantDetail/MenuItems'
import ViewCart from '../Components/restaurantDetail/ViewCart'

const foods = [
    {
        title: 'CENTER-CUT SIRLOIN ',
        description: 'Center-cut for tenderness. Lean, hearty and full of ﬂavor, served with your choice of 2 freshmade sides.',
        price: '$13.99 ',
        image: 'https://i0.wp.com/www.myfoodchannel.com/wp-content/uploads/2015/08/steak-filet-recipe-e1440017806941.jpg?resize=480%2C270'
    },
    {
        title: 'LEMON PEPPER CHICKEN ',
        description: 'Grilled Chicken with lemon pepper seasonings over rice. With two sides.',
        price: '$12.49',
        image: 'http://img.cookr.com/uploads/recipe/image/l_2-Ingredient-Grilled-Lemon-Pepper-Chicken-Culinary-Hill-5.jpg'
    },
    {
        title: 'Salad',
        description: 'Grab any flavor profile as a salad served on premium salad mix!',
        price: '$10.50',
        image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_28/1747463/salads-savannah-chopped-salad-te-inline-210712.jpg'
    },
    {
        title: 'BOB BURGER',
        description: 'Always fresh & cooked-to-order beef burgers. Build your own burger to meet your own taste, with an array of toppings and condiments!',
        price: '$10.49',
        image: 'https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg'
    },
    {
        title: 'BUTTERMILK FRIED CHICKEN SANDWICH',
        description: 'Hand-breaded buttermilk fried chicken on a toasted brioche bun with lettuce, tomato, mayo and American cheese. Served with fries.',
        price: '$10.00',
        image: 'https://media.cheddars.com/en_us/images/product/CSK-Fried-Chicken-Sandwich-with-Fries.jpg'

}
    ]



export default function RestaurantDetail({route, navigation}) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation}  />
    </View>
  )
}