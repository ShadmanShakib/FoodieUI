import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { Favorite, Home, Profile, Cart } from "../user";
import { Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons";

type TypeBottomTabNavigation = {
  Home: undefined;
  Favorite: undefined;
  Cart: undefined;
  Profile: undefined;
};
export default function BottomTabNavigation() {
  const Tab = createBottomTabNavigator<TypeBottomTabNavigation>();
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <Entypo
              size={20}
              name="home"
              color={focused ? "#FA4A0C" : "gray"}
            />
          ),
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              size={20}
              name="favorite"
              color={focused ? "#FA4A0C" : "gray"}
            />
          ),
          headerShown: false,
        }}
        component={Favorite}
        name="Favorite"
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Entypo
              size={20}
              name="shopping-cart"
              color={focused ? "#FA4A0C" : "gray"}
            />
          ),
          headerShown: false,
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={20}
              color={focused ? "#FA4A0C" : "gray"}
            />
          ),
          headerShown: false,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
