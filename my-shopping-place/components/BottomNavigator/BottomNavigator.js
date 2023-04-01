import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import Products from "../Items/Products";
import Basket from "../Basket/Basket";

const Tab = createBottomTabNavigator();

function ShopingScreen() {
  return (
    <View>
      <Products />
    </View>
  );
}
function BasketScreen() {
  return (
    <View>
      <Basket />
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;

          if (route.name === "MyShoppingPlace") {
            iconName = "ios-home";
          } else if (route.name === "Basket") {
            iconName = "ios-basket";
          }
          return <Ionicons name={iconName} size={30} color={"#e03131"} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="MyShoppingPlace"
        component={ShopingScreen}
        options={{
          headerTintColor: "#e03131",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          title: "MyBasket",
          headerTintColor: "#e03131",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
