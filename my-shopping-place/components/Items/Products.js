import { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { ref, onValue } from "firebase/database";

import { db } from "../Service/Service";
import Cards from "../Card/Cards";

function Products() {
  const [product, setProduct] = useState({});
  const productKeys = Object.keys(product);

  useEffect(() => {
    return onValue(ref(db, "/products"), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      let productItem = { ...data };
      setProduct(productItem);
    });
  }, []);
  return (
    <ScrollView>
      {productKeys.length > 0 ? (
        productKeys.map((key) => (
          <Cards
            id={product[key].id}
            key={product[key].id}
            name={product[key].name}
            description={product[key].des}
            image={product[key].img}
            price={product[key].price}
          />
        ))
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator
            animating={true}
            size={"large"}
            color={MD2Colors.red800}
          />
          <Text>Loading Product...</Text>
        </View>
      )}
    </ScrollView>
  );
}
export default Products;
