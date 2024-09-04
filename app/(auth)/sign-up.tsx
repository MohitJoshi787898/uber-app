import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";

import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignUP = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onSignUpPress = async () => {
    return null;
  };
  return (
    <ScrollView className="bg-red-200 flex-1">
      <View className="flex-1 bg-white">
        <View className="w-full h-[250px] relative ">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text
            className="  absolute bottom-5 left-5 text-2xl text-black font-JakartaSemiBold
          
          "
          >
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter Name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />

          <InputField
            label="Email"
            placeholder="Enter Email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter Password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="Sign-up"
            className="mt-6"
            onPress={onSignUpPress}
          />
          <Link
            href="/(auth)/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log-in</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUP;

const styles = StyleSheet.create({});
