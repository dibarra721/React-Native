import CategoriesScreen from '../screens/CategoriesScreen'
import MealScreen from '../screens/MealScreen'
import MealDetail from '../screens/MealDetail'
import{createStackNavigator} from "react-navigation-stack"

import{createAppContainer} from "react-navigation"




const MealsNavigator= createStackNavigator({

Categories: CategoriesScreen,
MealScreen:{ 
    screen:MealScreen
},
MealDetail:MealDetail
    
})


export default createAppContainer(MealsNavigator)