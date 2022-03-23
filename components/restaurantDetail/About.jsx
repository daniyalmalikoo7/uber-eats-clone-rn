import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

// const yelpRestaurantInfo = {
//   name: "Farmhouse Kitchen Thai Cuisine",
//   image:
//     "https://b.zmtcdn.com/data/pictures/7/52867/e444cec1fe737b781a116dce9836c270_featured_v2.jpg?fit=around|750:500&crop=750:500;*,*",
//   price: "$$",
//   reviews: "1500",
//   rating: "4.5",
//   categories: [
//     { title: "Thai" },
//     { title: "Comfort Food" },
//     { title: "Coffee" },
//     { title: "Ice Cream" },
//     { title: "Snacks" },
//   ],
// };

const About = ({ route }) => {
  console.log("route", route);

  const { name, image, price, reviews, rating, categories } = route.params;

  const formattedCategories = categories
    .map((category) => category.title)
    .join(" • ");

  const desc = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDesc desc={desc} />
    </View>
  );
};

const RestaurantImage = ({ image }) => (
  <View>
    <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
  </View>
);

const RestaurantName = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const RestaurantDesc = ({ desc }) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: "400",
      marginHorizontal: 15,
    }}
  >
    {desc}
  </Text>
);

export default About;

const styles = StyleSheet.create({});
