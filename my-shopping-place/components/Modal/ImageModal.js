import { Modal, Image, TouchableOpacity, View, Text } from "react-native";

import { styles } from "./ImageModal.module";

function ImageModal({ visible, image, onClose, title, description }) {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image style={styles.image} source={{ uri: image }} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
export default ImageModal;
