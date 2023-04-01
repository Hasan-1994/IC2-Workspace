import { useState } from "react";
import { Card, Title, Text, Button } from "react-native-paper";
import { TouchableWithoutFeedback } from "react-native";
import { useDispatch } from "react-redux";
import { addToBasket } from "../Redux/actions";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./Cards.module";
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
      <Title style={styles.cardTitle}>{name}</Title>
      <Card.Content style={styles.cardContent}>
        <Text style={styles.cardDescription}>{description}</Text>
        <Text variant="titleLarge">{price},00€</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={handleAddToBasket} style={styles.addToBasketButton}>
          <Text style={styles.addToBasketButtonText}>Add </Text>
          <Ionicons name={"basket"} color={"white"} size={20} />
        </Button>
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
