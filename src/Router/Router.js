import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CompletedTasks from "../CompletedTasks";
import StackNavigator from "./StackNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

export const PATHS = {
  STACK: 'STACK',
  Home: "Home",
  TODO_DETAILS: "TodoDetails",
  COMPLETED: 'Completed Tasks'
};

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: {
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
          },
          tabBarStyle: {
            backgroundColor: "black",
            borderTopColor: "transparent",
            position: "relative",
            height:50,
            bottom:0,
            padding:0,
            width: "100%",
            marginHorizontal: "0%",
            
          },
          tabBarLabelStyle: {
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          },
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                flex: 1,
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            />
          ),
        }}
      >
        <Screen
          name={PATHS.STACK}

          component={StackNavigator}
          options={{
            headerTitle: "Todo App ", 
            headerTitleAlign: "center",
            
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Screen
          name={PATHS.COMPLETED}

          component={CompletedTasks}
          options={{
            headerTitleAlign: "center",
            tabBarIcon: ({ focused }) => (

              <FontAwesome5 name="check-double" size={24} color="white" />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
