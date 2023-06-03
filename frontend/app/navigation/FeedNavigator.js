import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

import colors from "../config/colors";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{
        headerStyle: { backgroundColor: colors.dark },
        headerTintColor: colors.primary,
      }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{
        headerStyle: { backgroundColor: colors.dark },
        headerTintColor: colors.primary,
      }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
