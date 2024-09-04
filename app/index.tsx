import { Redirect, Stack, useNavigation } from "expo-router";
import { Text, View } from "react-native";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return <Redirect href="/(auth)/welcome" />;
}
