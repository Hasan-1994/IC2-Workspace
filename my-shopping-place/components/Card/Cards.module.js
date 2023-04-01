import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  CardItem: {
    padding: 10,
    margin: 10,
    backgroundColor: "white",
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
  addToBasketButton: {
    backgroundColor: "#e03131",
  },
  addToBasketButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDescription: {
    fontSize: 15,
    width: "70%",
    textAlign: "justify",
  },
});
