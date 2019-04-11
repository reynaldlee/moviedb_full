import React from "react";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import MovieListScreen from "../screens/MovieListScreen";
import MovieDetailScreen from "../screens/MovieDetailScreen";
import Drawer from "../components/Drawer";

const MovieScreen = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    MovieListScreen: {
      screen: MovieListScreen
    },
    MovieDetailScreen: {
      screen: MovieDetailScreen
    },
    SearchScreen: {
      screen: SearchScreen
    }
  },
  {
    defaultNavigationOptions: () => {
      return {
        headerStyle: {
          backgroundColor: "#000"
        },
        headerTintColor: "#fff"
      };
    }
  }
);

const AppNavigator = createDrawerNavigator(
  {
    Search: {
      screen: () => null,
      navigationOptions: () => {
        return {
          title: "Search",
          drawerIcon: <Icon name="md-search" color="#ccc" size={30} />
        };
      }
    },
    MovieScreen: {
      screen: MovieScreen,
      navigationOptions: () => {
        return {
          title: "Movies",
          drawerIcon: <Icon name="md-film" color="#ccc" size={30} />
        };
      }
    }
  },
  {
    initialRouteName: "MovieScreen",
    drawerBackgroundColor: "#000",
    contentComponent: Drawer,
    contentOptions: {
      activeBackgroundColor: "transparent",
      labelStyle: {
        color: "white",
        fontSize: 25
      }
    }
  }
);

export default createAppContainer(AppNavigator);
