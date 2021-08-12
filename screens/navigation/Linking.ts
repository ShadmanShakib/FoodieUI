import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Auth: "auth",
      Root: {
        screens: {
          Feed: {
            screens: {
              Home: "home",
            },
          },
        },
      },
    },
  },
};
