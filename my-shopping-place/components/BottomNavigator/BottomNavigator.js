import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import Products from "../Items/Products";
import Basket from "../Items/Basket";

const Tab = createBottomTabNavigator();

function ShopingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Products />
    </View>
  );
}
function BasketScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={"red"} />;
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
          headerTintColor: "red",
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
          headerTintColor: "red",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
