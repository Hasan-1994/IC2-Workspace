import { useState } from "react";
import { Card, Title, Text, Button } from "react-native-paper";
import { StyleSheet, Alert, TouchableWithoutFeedback } from "react-native";
import { useDispatch } from "react-redux";
import { addToBasket, ADD_TO_BASKET } from "../Redux/actions";

import ImageModal from "../Modal/ImageModal";

function Cards({ id, name, description, image, price }) {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAddToBasket = () => {
    const item = { id: parseInt(id), name, description, image, price };
    dispatch(addToBasket(item));
    console.log(addToBasket(item));
  };

  return (
    <Card style={styles.CardItem} key={id}>
      <TouchableWithoutFeedback onPress={openModal}>
        <Card.Cover
          source={{ uri: image }}
          style={styles.CardImage}
          onPress={openModal}
        />
      </TouchableWithoutFeedback>
      <Card.Content>
        <Title>{name}</Title>
        <Text>{description}</Text>
        <Text>{price},00€</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleAddToBasket}>Add to Basket</Button>
      </Card.Actions>
      <ImageModal
        visible={modalVisible}
        image={image}
        onClose={closeModal}
        title={name}
      />
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
    height: 250,
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    height: 300,
    width: 300,
  },
  modalCloseButton: {
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 25,
  },
});
