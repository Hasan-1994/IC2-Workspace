import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import MyTabs from "./components/BottomNavigator/BottomNavigator";
import store from "./components/Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
