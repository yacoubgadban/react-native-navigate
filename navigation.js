import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'


import CategoriesScreen from './screens/Categories'
import ProuductDetailsScreen from './screens/ProductDetails'
import ProuductScreen from './screens/Prouduct'


const MyStackNavigator = createStackNavigator();

export const StamNav=()=>{

    return(
        <MyStackNavigator.Navigator>
            <MyStackNavigator.Screen name="Categories" component={CategoriesScreen}/>
            <MyStackNavigator.Screen name="Prouducts" component={ProuductScreen}/>
            <MyStackNavigator.Screen name="ProuductDetails" component={ProuductDetailsScreen}/>
        </MyStackNavigator.Navigator>
       
        )

}

