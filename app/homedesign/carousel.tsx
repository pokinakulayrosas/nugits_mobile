import { Text, View, Image, Dimensions } from "react-native";
import React, {useEffect} from "react";
import { FlatList } from "react-native-gesture-handler";

const Carousel = () => {

  const flatlistRef = React.useRef<FlatList<{ id: string; image: any }> | null>(null);
  const screenWidth = Dimensions.get("window").width;

  const[activeIndex, setActiveIndex] = React.useState(0);

  useEffect(()=>{
    let interval = setInterval(()=>{
      if(activeIndex === carouselData.length - 1){
        flatlistRef.current?.scrollToIndex({index: 0, animated: true});
      } else {
        setActiveIndex(0);
        flatlistRef.current?.scrollToIndex({index: activeIndex + 1, animated: true});
      }
    },2000);

    return()=>clearInterval(interval);
  });

  const getItemLayout = (data: any, index: number)=>({
    length:screenWidth,
    offset: screenWidth * index,
    index:index,

  }
  )

  const carouselData = [
    {
      id: "1",
      image: require("../../assets/home_image/carousel_1.jpg"),
    },
    {
      id: "2",
      image: require("../../assets/home_image/carousel_2.jpg"),
    },
    {
      id: "3",
      image: require("../../assets/home_image/carousel_1.jpg"),
    },
  ];

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    console.log({scrollPosition});

    const index = scrollPosition / screenWidth;
    console.log({index});

    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View 
            key={dot.id} 
            className="bg-green-950 h-2 w-2 rounded-full mx-1 bottom-12 ">
          </View>
        );
      } else {
        return (
          <View 
            key={dot.id}
            className="bg-red-950 h-2 w-2 rounded-full mx-1 bottom-12">
          </View>
        );
      }
    });
  };


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
        ref={flatlistRef}
        data={carouselData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={handleScroll}
        keyExtractor={(item)=>item.id}
        getItemLayout={getItemLayout}
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
