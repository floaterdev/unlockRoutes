import React from "react";
import { View, SafeAreaView, Text } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Menu</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(HomeScreen);
