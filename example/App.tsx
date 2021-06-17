import React, { useState } from "react";
import { View, StatusBar, ScrollView, SafeAreaView } from "react-native";
import GorgeousHeader from "react-native-gorgeous-header";
import InternetConnectionAlert from "react-native-internet-connection-alert";
import { AppleCard, AppOfTheDayCard } from "react-native-apple-card-views";
// ? Assets
const menuImage = require("./assets/menu.png");
const searchImage = require("./assets/search.png");
const colorfy = require("./assets/Colorfy.jpg");
const colorfyBG = require("./assets/ColorfyBG.jpg");
const brawlers = require("./assets/hero_bg_brawlstars_.jpg");
const profileImageSource = {
  uri:
    "https://images.unsplash.com/photo-1514846226882-28b324ef7f28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
};

const App = () => {
  const [isInternetAvailable, setIsInternetAvailable] = useState(false);
  return (
    <InternetConnectionAlert
      onChange={(connectionState) => {
        console.log("Connection State: ", connectionState);
        setIsInternetAvailable(connectionState.isConnected);
      }}
    >
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <GorgeousHeader
            title="Apps"
            subtitle="Find the best apps of the week"
            placeholder="Find the apps"
            menuImageSource={menuImage}
            searchImageSource={searchImage}
            searchBarStyle={styles.headerSearchBarStyle}
            profileImageSource={profileImageSource}
          />
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainerStyle}
            contentInset={styles.contentInsetStyle}
          >
            <AppOfTheDayCard
              iconSource={colorfy}
              backgroundSource={colorfyBG}
            />
            <View style={styles.appleCardContainer}>
              <AppleCard source={brawlers} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    </InternetConnectionAlert>
  );
};

const styles = {
  container: {
    marginTop: 16,
  },
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  contentInsetStyle: {
    bottom: 250,
  },
  appleCardContainer: {
    marginTop: 24,
  },
  headerSearchBarStyle: {
    padding: 16,
    marginTop: 24,
    borderRadius: 24,
    flexDirection: "row",
    backgroundColor: "#f8f8f8",
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
};

export default App;
