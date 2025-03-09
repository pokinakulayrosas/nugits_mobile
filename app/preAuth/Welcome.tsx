import { View, Text, TouchableOpacity, Image } from "react-native";
import { ArrowRight } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#F5F7FF", "#DCE3FF"]}
      className="flex-1 items-center justify-center"
    >
      <Image
        source={require("../../assets/images/logo.png")}
        className="w-[75px] h-[75px] mt-5 rounded-full"
      />

      <Text className="text-3xl font-extrabold text-[#384484] mt-6">
        Welcome to <Text className="italic text-[#5566C9]">NU-GITS!</Text>
      </Text>
      <Text className="px-10 text-md text-[#384484] text-center mt-2 leading-relaxed">
        Helping Students Stay Balanced —{" "}
        <Text className="italic font-bold text-[#5566C9]">NU-GITS</Text>, Your
        Trusted Mental Health Ally.
      </Text>

      <Image
        source={require("../../assets/images/center-pic.png")}
        className="w-[350px] h-[350px] mt-0 rounded-2xl"
      />

      <TouchableOpacity
        className="bg-[#384484] mt-2 px-8 py-3 rounded-full flex-row items-center shadow-lg active:bg-[#2E3A84]"
        onPress={() => router.push("/preAuth/Login")}
      >
        <Text className="text-white font-semibold text-lg">Get Started</Text>
        <ArrowRight size={22} color="white" style={{ marginLeft: 5 }} />
      </TouchableOpacity>
    </LinearGradient>
  );
}
