import { Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

const Carousel = () => {
  const screenWidth = Dimensions.get("window").width;
  const carouselData = [
    {
      id: "1",
      image: require("../../../assets/home_image/carousel_1.jpg"),
    },
    {
      id: "2",
      image: require("../../../assets/home_image/carousel_2.jpg"),
    },
    {
      id: "3",
      image: require("../../../assets/home_image/carousel_2.jpg"),
    },
  ];

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    console.log({scrollPosition});
  };

  const renderDotIndicators = () => {
    return(
      carouselData.map((dot,index)=>{
        return(
          <View 
          key={index}
          className="bg-red-950 h-3 w-3 rounded-full mx-2">

          </View>
        )
      })
    )
  }


  const renderItem = ({
    item,
    index,
  }: {
    item: { id: string; image: any };
    index: number;
  }) => {
    return (
      <View>
        <Image
          source={item.image}
          style={{ height: 200, width: screenWidth }}
        />
      </View>
    );
  };

  return (
    <View>
      <Text>Carousel</Text>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        keyExtractor={(item)=>item.id}
      />
      <View style={{flexDirection:'row', justifyContent: 'center', marginTop: 30}}>
      {renderDotIndicators()}
      </View>
     
    </View>
  );
};

export default Carousel;
function dot(
  value: { id: string; image: any },
  index: number,
  array: { id: string; image: any }[]
): unknown {
  throw new Error("Function not implemented.");
}
