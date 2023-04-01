import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./Basket.module";
import { removeFromBasket } from "../Redux/actions";
import CheckoutButton from "./CheckoutButton";

function Basket() {
  const basketItems = useSelector((state) => state.basket.basketItems);
  const dispatch = useDispatch();

  const totalPrice = basketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveFromBasket = (productId) => {
    dispatch(removeFromBasket(Number(productId)));
  };

  return (
    <View style={styles.container}>
      {basketItems.length > 0 ? (
        <View>
          <View style={styles.itemsContainer}>
            <Text style={styles.title}>Basket</Text>
            {basketItems.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemPrice}>
                    {item.quantity} x {item.price},00
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleRemoveFromBasket(item.id)}
                  style={styles.removeButton}
                >
                  <Ionicons
                    name={"trash"}
                    color={"black"}
                    style={styles.removeButtonIcon}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>{totalPrice},00 €</Text>
          </View>
          <CheckoutButton />
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your Basket is empty.</Text>
        </View>
      )}
    </View>
  );
}

export default Basket;
