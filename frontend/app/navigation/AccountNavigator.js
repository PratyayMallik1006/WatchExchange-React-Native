import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../config/colors";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerStyle: { backgroundColor: colors.dark },
        headerTintColor: colors.primary,
      }}
    />
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{
        headerStyle: { backgroundColor: colors.dark },
        headerTintColor: colors.primary,
      }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;
