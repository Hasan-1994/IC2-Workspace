import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./Basket.module";

function CheckoutButton() {
  return (
    <View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text
          style={styles.checkoutButtonText}
          onPress={() => alert("Your order has been received")}
        >
          Checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CheckoutButton;
