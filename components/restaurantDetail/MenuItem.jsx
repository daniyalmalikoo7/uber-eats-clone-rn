import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
  menuItemStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

const MenuItem = ({ restaurantName, foods, hideCheckbox, marginLeft }) => {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  console.log("foods", foods);

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyles}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                fillColor="green"
                iconStyle={{
                  borderColor: "lightgray",
                  borderRadius: 0,
                }}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage
              image={food.image}
              marginLeft={marginLeft ? marginLeft : 0}
            />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = ({ food }) => (
  <View>
    <View
      style={{
        width: 240,
        height: 100,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={styles.titleStyle}>{food.title}</Text>
      <Text>{food.description}</Text>
      <Text>{food.price}</Text>
    </View>
  </View>
);

const FoodImage = ({ image, marginLeft }) => (
  <View>
    <Image
      source={{
        uri: image,
      }}
      style={{
        height: 100,
        width: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);

export default MenuItem;
