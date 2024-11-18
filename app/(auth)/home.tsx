import { View, Text } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Home = () => {
  const { user } = useUser();
  if (!user) {
    <Redirect href="/(public)/login" />;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome, {user?.emailAddresses[0].emailAddress} 🎉</Text>
    </View>
  );
};

export default Home;
