import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./components/BottomNavigator/BottomNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
