import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import storage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await storage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
        {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
