import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={Styles.card}>
        <Image
          style={Styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={Styles.detailsContainer}>
          <AppText style={Styles.title}>{title}</AppText>
          <AppText style={Styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const Styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#454545",
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: "green",
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
