import { Dimensions, Platform, StyleSheet } from "react-native";

export const defaultStyles = {
  purple: "#a10ebf",
  red: "#ff5757",
  blue: "rgb(37, 99, 235)",
  lightBlue: "rgba(37, 100, 235, 0.098)",
  white: "white",
  lightDark: "#426b80",
};

// const STATUSBAR_HEIGHT = StatusBar.currentHeight;
// const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export const globalStyles = StyleSheet.create({
  defaultWithoutBg: {
    height: WINDOW_HEIGHT - (Platform.OS === "ios" ? 0 : 8),
    maxHeight: WINDOW_HEIGHT - (Platform.OS === "ios" ? 0 : 8),
  },

  defaultColorBg: {
    height: WINDOW_HEIGHT - (Platform.OS === "ios" ? 0 : 0),
    maxHeight: WINDOW_HEIGHT - (Platform.OS === "ios" ? 0 : 0),
  },

  defaultStackBg: {
    height: SCREEN_HEIGHT - (Platform.OS === "ios" ? 0 : 0),
    maxHeight: SCREEN_HEIGHT - (Platform.OS === "ios" ? 0 : 0),
  },

  defaultDrawerBg: {
    height: SCREEN_HEIGHT - (Platform.OS === "ios" ? 0 : 0),
    maxHeight: SCREEN_HEIGHT - (Platform.OS === "ios" ? 0 : 0),
    minHeight: SCREEN_HEIGHT - (Platform.OS === "ios" ? 0 : 0),
  },

  fullHeightHeader: {},

  // ! MARGIN
  marginTopMini: {
    marginTop: 10,
  },
  marginTopSmall: {
    marginTop: 20,
  },
  marginTop: {
    marginTop: 30,
  },
  marginTopMedium: {
    marginTop: 50,
  },
  marginTopLarge: {
    marginTop: 70,
  },
  marginBottomMini: {
    marginBottom: 10,
  },
  marginBottomMiniMedium: {
    marginBottom: 15,
  },
  marginBottomSmall: {
    marginBottom: 20,
  },
  marginBottom: {
    marginBottom: 30,
  },
  marginBottomMedium: {
    marginBottom: 50,
  },
  marginBottomLarge: {
    marginBottom: 70,
  },
  marginMini: {
    marginVertical: 10,
  },
  marginSmall: {
    marginVertical: 20,
  },
  margin: {
    marginVertical: 30,
  },
  marginMedium: {
    marginVertical: 50,
  },
  marginLarge: {
    marginVertical: 70,
  },
  marginLeftIcon: {
    marginLeft: 5,
  },
  marginRightIcon: {
    marginRight: 5,
  },
  marginRight: {
    marginRight: 10,
  },
  marginLeft: {
    marginLeft: 10,
  },

  // * PADDING
  paddingMini: {
    padding: 5,
  },
  paddingSmall: {
    padding: 10,
  },
  paddingSmallMedium: {
    padding: 15,
  },
  padding: {
    padding: 20,
  },
  paddingMedium: {
    padding: 30,
  },
  paddingBottom: {
    paddingBottom: 20,
  },
  paddingBottomSmall: {
    paddingBottom: 10,
  },
  paddingTop: {
    paddingTop: 20,
  },
  paddingHorizontalSmall: {
    paddingHorizontal: 10,
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  paddingVertical: {
    paddingVertical: 20,
  },
  paddingVerticalSmall: {
    paddingVertical: 10,
  },

  // ! TEXT
  // * COLOR
  colorPurple: {
    color: defaultStyles.purple,
  },
  colorRed: {
    color: defaultStyles.red,
  },
  colorBlue: {
    color: defaultStyles.blue,
  },
  colorWhite: {
    color: defaultStyles.white,
  },
  bgPurple: {
    backgroundColor: defaultStyles.purple,
  },
  bgRed: {
    backgroundColor: defaultStyles.red,
  },
  bgBlue: {
    backgroundColor: defaultStyles.blue,
  },
  borderBottomRed: {
    borderBottomWidth: 1,
    borderBottomColor: defaultStyles.red,
  },
  borderBottom: {
    borderBottomWidth: 0.5,
  },
  // * TEXT
  h2: {
    fontSize: 26,
  },
  h3: {
    fontSize: 23,
  },
  h4: {
    fontSize: 20,
  },
  h5: {
    fontSize: 18,
  },
  h6: {
    fontSize: 16,
  },
  small: {
    fontSize: 14,
  },
  mini: {
    fontSize: 12,
  },
  semibold: {
    fontWeight: "600",
  },
  bold: {
    fontWeight: "bold",
  },
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  textUppercase: {
    textTransform: "uppercase",
  },

  // ! POSITION

  // * FLEX
  flex: {
    display: "flex",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  alignItemsBaseline: {
    alignItems: "baseline",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  justifyContentBetween: {
    justifyContent: "space-between",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentStart: {
    justifyContent: "flex-start",
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
  flexWrap: {
    flexWrap: "wrap",
  },

  // ! FONTS
  arial: {
    fontFamily: "Arial",
  },

  borderRadiusSmall: {
    borderRadius: 4,
  },

  borderRadiusMedium: {
    borderRadius: 10,
  },

  // ! POSITION
  relative: {
    position: "relative",
  },

  // ! COMPONENTS

  floatingButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 18,
    zIndex: 10000,
  },
});
