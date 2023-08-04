import { Platform, StyleSheet } from "react-native";
import formStyleSheet from "./form";

const themeRootPartFirst = {
  "font-weight-system-bold": 700,
  "font-weight-system-extra-bold": 800,
  "font-weight-system-extra-light": 200,
  "font-weight-system-light": 300,
  "font-weight-system-medium": 500,
  "font-weight-system-regular": 400,
  "font-weight-system-semibold": 600,
  "tl-color-grey-1": "#efefef",
  "tl-color-grey-2": "#dbdbdb",
  "tl-color-grey-4": "#a8a8a8",
  "tl-color-grey-5": "#8e8e8e",
  "tl-color-grey-6": "#737373",
  "tl-color-grey-8": "#363636",
  "tl-color-grey-9": "#262626",
  "lt-color-gray-100": "#f8f9fc",
  "lt-color-gray-200": "#f1f3f9",
  "lt-color-gray-300": "#dee3ed",
  "lt-color-gray-400": "#c2c9d6",
  "lt-color-gray-500": "#8f96a3",
  "lt-color-gray-600": "#5e636e",
  "lt-color-gray-700": "#2f3237",
  "lt-color-gray-800": "#1d1e20",
  "lt-color-gray-900": "#111213",
  "lt-color-blue-4": "#47afff",
  "lt-color-blue-5": "#0095f6",
  "lt-color-blue-6": "#0074cc",
  "lt-color-blue-7": "#0057a3",
  "lt-color-blue-9": "#002952",
  "lt-colot-cyan-5": "#27c4f5",
  "lt-shadowDefault": "0 2px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 4px -1px rgba(0, 0, 0, 0.04)",
  "lt-shadowActive": "0 0 8px -2px rgba(0, 0, 0, 0.1), 0 6px 20px -3px rgba(0, 0, 0, 0.2)",
  "lt-color-white": "#fff",
  "lt-color-black": "#111213",
  "lt-color-transparent": "rgba(255, 255, 255, 0)"
}

export const themeRoot = {
  ...themeRootPartFirst,
  "lt-color-background-light": themeRootPartFirst["lt-color-gray-100"],
  "lt-color-background-default": themeRootPartFirst["lt-color-gray-200"],
  "lt-color-background-dark": themeRootPartFirst["lt-color-gray-300"],
  "lt-color-border-light-primary": themeRootPartFirst["lt-color-gray-200"],
  "lt-color-border-light-secondary": "#d2d2d7",
  "lt-color-border-default": themeRootPartFirst["lt-color-gray-300"],
  "lt-color-border-dark-primary": themeRootPartFirst["lt-color-gray-400"],
  "lt-color-border-dark-secondary": "#424245",
  "lt-color-text-very-light": themeRootPartFirst["lt-color-gray-500"],
  "lt-color-text-light": themeRootPartFirst["lt-color-gray-600"],
  "lt-color-text-default": themeRootPartFirst["lt-color-gray-700"],

  "lt-color-text-dark": themeRootPartFirst["lt-color-gray-800"],
  "lt-color-overlay-default": "#fff",
  "lt-color-overlay-dark": "#fff",
  "lt-color-overlay-transparent": "rgba(0, 0, 0, 0.1)",
  "lt-shadow-website-overlay": "0 0 7px 0 rgba(0, 0, 0, 0.3)"
}

const baseFontSize = 17;

export const themeStyles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
  },

  container:{
    backgroundColor: '#fff'
  },

  fontSFProDisplayRegulary: {
    fontFamily: 'sf-pro-display-regular'
  },

  fontSFProDisplaySemiBold: {
    fontFamily: 'sf-pro-display-semibold'
  },

  fontSFProTextRegulary: {
    fontFamily: 'sf-pro-text-regular'
  },

  fontSFProTextSemiBold: {
    fontFamily: 'sf-pro-text-semibold'
  },

  text:{
    fontSize: baseFontSize,
    lineHeight: 1.47059 * baseFontSize,
    fontWeight: '400',
    letterSpacing: -0.022 * baseFontSize,
    color: '#1d1d1f',
    fontStyle: 'normal',
  },
  
  colorPrimary: {
    color: '#1d1d1f'
  },

  colorSecondary: {
    color: 'rgb(117, 128, 138)' //themeRoot["lt-color-text-light"]
  },

  widthFull:{
    width: '100%'  
  },

  heightFull:{
    width: '100%'
  },

  displayFlex: {
    display: 'flex'
  },

  focus: {
    borderWidth: 4,
    borderColor: 'rgba(0, 125, 250, 0.6)',
    margin: -1
  },

  button: {
    minWidth: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 980,
    backgroundColor: '#0071e3',
    marginHorizontal: 14,
    marginVertical: 14,
  },

  buttonText:{
    fontSize: baseFontSize,
    textAlign: 'center',
    lineHeight: 1.17648 * baseFontSize,
    fontWeight: '400',
    letterSpacing: -0.022 * baseFontSize,
    color: '#fff',
  },

  buttonSecondary: {
    backgroundColor: '#e8e8ed',
  },

  buttonSecondaryText:{
    color: '#000',
  },

  buttonSecondaryHover: {
    backgroundColor: '#ebebf0',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  positionRelative: {
    position: 'relative'
  },

  positionAbsolute: {
    position: 'absolute'
  },

  left0: {
    left: 0,
  },

  right0: {
    right: 0,
  },

  bottom0: {
    bottom: 0,
  },

  top0: {
    top: 0,
  },

  flexNone: {
    flex: 0,
  },

  flexContent: {
    flex: 1,
  },

  flexAuto: {
    flex: 1,
  },

  flexDirectionColumn: {
    flexDirection: 'column',
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },

  justifyContentStart: {
    justifyContent: 'flex-start',
  },

  justifyContentEnd: {
    justifyContent: 'flex-end',
  },

  justifyContentCenter: {
    justifyContent: 'center',
  },

  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },

  justifyContentSpaceAround: {
    justifyContent: 'space-around',
  },

  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },

  alignContentFlexStart: {
    alignContent: 'flex-start',
  },

  alignContentFlexEnd: {
    alignContent: 'flex-end',
  },

  alignContentStretch: {
    alignContent: 'stretch',
  },

  alignContentCenter: {
    alignContent: 'center',
  },

  alignContentSpaceAround: {
    alignContent: 'space-around',
  },

  alignItemsStart: {
    alignItems: 'flex-start',
  },

  alignItemsCenter: {
    alignItems: 'center',
  },

  alignItemsEnd: {
    alignItems: 'flex-end',
  },

  alignItemsStretch: {
    alignItems: 'stretch',
  },

  alignSelfStart: {
    alignSelf: 'flex-start',
  },

  alignSelfCenter: {
    alignSelf: 'center',
  },

  alignSelfEnd: {
    alignSelf: 'flex-end',
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },

  rowReverse: {
    flexDirection: 'row-reverse',
  },

  column: {
    margin: 0,
    padding: 0,
    minWidth: 0,
  },

  violator: {
    borderWidth: 1,
    borderColor: '#bf4800',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#bf4800',
    fontSize: baseFontSize,
    lineHeight: 1.17648 * baseFontSize,
    fontWeight: '400',
    letterSpacing: -0.022 * baseFontSize,
    borderRadius: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 7,
    paddingBottom: 7,
  },

  violatorInline: {
    marginLeft: 10,
  },

  violatorSecondary: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#6e6e73',
    color: '#6e6e73',
  },

  violatorReduced: {
    fontSize: 12,
    lineHeight: 1.33337 * 12,
    fontWeight: '400',
    letterSpacing: -0.01 * 12,
    borderRadius: 12,
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 3,
    paddingBottom: 3,
  },

  violatorReducedInline: {
    marginLeft: 6,
  },

  violatorFrameless: {
    color: '#bf4800',
  },

  violatorFramelessInline: {
    marginLeft: 10,
  },

  violatorFramelessReduced: {
    fontSize: 12,
    lineHeight: 1.33337 * 12,
    fontWeight: '400',
    letterSpacing: -0.01 * 12,
    borderRadius: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },

  violatorFramelessReducedInline: {
    marginLeft: 6,
  },

  themeDarkViolator: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#f56300',
    color: '#f56300',
  },

  themeDarkViolatorFrameless: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#f56300',
    color: '#f56300',
  },

  themeDarkViolatorSecondary: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#86868b',
    color: '#86868b',
  },

  themeDark: {
    backgroundColor: '#000',
  },

  themeDarkText:{
    color: '#f5f5f7',
  },

  themeDarkBorder:{
    borderColor: '#424245',
  },

  themeLight: {
    backgroundColor: '#f5f5f7',
  },

  themeDarkLight: {
    backgroundColor: '#fff',
    color: '#1d1d1f',
  },

  ...formStyleSheet,

  borderCircle:{
    borderRadius: 9999
  }

})