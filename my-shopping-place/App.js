import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./components/BottomNavigator/BottomNavigator";
import { Provider } from "react-redux";
import store from "./components/store";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
