import { useState, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { db } from "../config/config";
import { ref, onValue } from "firebase/database";
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
          <Text>{product[key].name}</Text>
        ))
      ) : (
        <View>
          <ActivityIndicator size="large" />
          <Text>Loading Product...</Text>
        </View>
      )}
    </ScrollView>
  );
}
export default Products;
