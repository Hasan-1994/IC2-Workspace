import { View, Text } from "react-native";
import {Card, Title} from 'react-native-paper';
import Products from "../Items/Products";

function Cards({ product: { name } }) {
  return (
      <Card id={product.id}>
        <Card.Cover />
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
      </Card>
  );
}

export default Cards;

