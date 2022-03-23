import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import MenuItem from "../components/restaurantDetail/MenuItem";
import { Divider } from "react-native-elements";
import ViewCart from "../components/restaurantDetail/ViewCart";
import { Dimensions } from "react-native";

const RestaurantDetail = ({ route, navigation }) => {
  const foods = [
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "13.50$",
      image:
        "https://media.istockphoto.com/photos/meat-lasagna-picture-id543831374?k=20&m=543831374&s=612x612&w=0&h=s06eCmtIefRh38YTNUzSbk_68Lhuph2h5e4ruQQilfc=",
    },
    {
      title: "Tandoori Chicken",
      description: "Amazing indian dish withtenderloin chicken off the sizzles",
      price: "13.50$",
      image:
        "https://media.istockphoto.com/photos/meat-lasagna-picture-id543831374?k=20&m=543831374&s=612x612&w=0&h=s06eCmtIefRh38YTNUzSbk_68Lhuph2h5e4ruQQilfc=",
    },
    {
      title: "Chilaquiles",
      description:
        "Chilaquiles with cheese and sauce. A delicious mexican dish",
      price: "13.50$",
      image:
        "https://media.istockphoto.com/photos/meat-lasagna-picture-id543831374?k=20&m=543831374&s=612x612&w=0&h=s06eCmtIefRh38YTNUzSbk_68Lhuph2h5e4ruQQilfc=",
    },
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "13.50$",
      image:
        "https://media.istockphoto.com/photos/meat-lasagna-picture-id543831374?k=20&m=543831374&s=612x612&w=0&h=s06eCmtIefRh38YTNUzSbk_68Lhuph2h5e4ruQQilfc=",
    },
  ];
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
