import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../actions";
import Cards from "../Card/Cards";
import { Card } from "react-native-paper";

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
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>{item.quantity} x</Text>
              <Text>{item.price},00€</Text>
              <View>
                <Button
                  title="Remove"
                  onPress={() => handleRemoveFromBasket(item.id)}
                />
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
