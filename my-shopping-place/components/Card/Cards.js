import { useState } from "react";
import { Card, Title, Text, Button } from "react-native-paper";
import { StyleSheet, Alert } from "react-native";

function Cards({ name, description, image, price }) {
  return (
    <Card style={styles.CardItem}>
      <Card.Cover source={{ uri: image }} style={styles.CardImage} />
      <Card.Content>
        <Title>{name}</Title>
        <Text>{description}</Text>
        <Text>{price},00€</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => Alert.alert("Header", "Subtitle")}>
          Add to Basket
        </Button>
      </Card.Actions>
    </Card>
  );
}
export default Cards;

const styles = StyleSheet.create({
  CardItem: {
    padding: 10,
    margin: 10,
  },
  CardImage: {
    height: 100,
    width: "auto",
  },
});
