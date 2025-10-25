import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATHS } from "./Router";
import Home from "../Home";
import TodoDetails from "../TodoDetails";

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={PATHS.Home} component={Home} />
      <Screen name={PATHS.TODO_DETAILS} component={TodoDetails} />
    </Navigator>
  );
};

export default StackNavigator;
