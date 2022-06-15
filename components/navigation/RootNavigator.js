import React from "react";
import ProductDetails from "../ProductDetail";
import ProductsList from "../ProductsList";
import { Cart } from "../Cart";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();
export default function RootNavigator() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={ProductsList} />
      <Screen
        name="ProductDetails"
        component={ProductDetails}
        options={({ route }) => ({ title: route.params.product.name })}
      />
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}
