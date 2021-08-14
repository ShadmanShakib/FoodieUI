import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Auth: "auth",
      SingleDish: "singledish",
      Root: {
        screens: {
          Feed: {
            screens: {
              Home: "home",
              Favorite: "favorite",
              Cart: "cart",
              Profile: "profile",
              Discount: "discount",
            },
          },
          Order: "order",
        },
      },
    },
  },
};
