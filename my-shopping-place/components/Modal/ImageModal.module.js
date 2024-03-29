import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    position: "relative",
    width: "90%",
    height: "50%",
  },
  image: {
    top: "20%",
    width: "100%",
    height: 200,
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 50,
    backgroundColor: "red",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: -5, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    bottom: "50%",
    fontSize: 25,
    fontWeight: "bold",
  },
  description: {
    top: "20%",
    fontSize: 15,
    textAlign: "justify",
  },
});
