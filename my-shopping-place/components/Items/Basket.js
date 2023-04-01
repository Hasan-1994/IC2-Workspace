import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../Redux/actions";
import { Button, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

function Basket() {
  const basketItems = useSelector((state) => state.basket.basketItems);
  const dispatch = useDispatch();
  const totalItems = basketItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = basketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleRemoveFromBasket = (productId) => {
    dispatch(removeFromBasket(Number(productId)));
  };

  return (
    <View style={{ flex: 1 }}>
      {basketItems.length > 0 ? (
        <View style={{ flex: 1 }}>
          {basketItems.map((item) => (
            <View key={item.id}>
              <Text variant="titleMedium">{item.name}</Text>
              <Text variant="bodyMedium">{item.description}</Text>
              <View>
                <Text>
                  {item.quantity} x {item.price},00€
                </Text>
                <Button onPress={() => handleRemoveFromBasket(item.id)}>
                  <Ionicons name={"trash"} color={"red"} />
                </Button>
              </View>
            </View>
          ))}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              Total Price:
            </Text>
            <Text
              style={{
                fontWeight: "bold",
              }}
            >
              {totalPrice},00€
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Your basket is empty!</Text>
        </View>
      )}
    </View>
  );
}

export default Basket;
