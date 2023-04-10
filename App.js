import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import PaymentScreen from "./src/screens/PaymentScreen";

const navigator = createStackNavigator(
  {
    UpiPayment: PaymentScreen,
  },
  {
    initialRouteName: "UpiPayment",
    defaultNavigationOptions: {
      title: "Upi-Integration",
    },
  }
);

export default createAppContainer(navigator);
