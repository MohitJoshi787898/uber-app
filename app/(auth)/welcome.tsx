import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef } from "react";
import { onboarding } from "../../constants/index";
import CustomButton from "../../components/CustomButton";
const Onbording = () => {
  const swiperRef = useRef<Swiper>(null);
  // const swiperRef useRef typeof swiper initial value null
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="w-full flex justify-end items-end p-5"
        onPress={() => router.replace("/(auth)/sigi-up")}
      >
        <Text className="text-black text-md  font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image source={item.image} className="w-full h-[300px]" />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10  text-center ">
                {item.title}
              </Text>
            </View>
            <View>
              <Text className="text-lg font-JakartaSemiBold  text-center mx-10 mt-3 text-[#858585]">
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
      <CustomButton title="Next" className="w-11/12 mt-10 mb-5" />
    </SafeAreaView>
  );
};

export default Onbording;

const styles = StyleSheet.create({});
