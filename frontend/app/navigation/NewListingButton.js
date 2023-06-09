import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: colors.dark }}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.dark,
    borderRadius: 35,
    borderWidth: 1,
    bottom: 20,
    height: 70,
    justifyContent: "center",
    width: 70,
  },
});

export default NewListingButton;
