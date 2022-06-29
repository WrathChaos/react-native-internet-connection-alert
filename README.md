<img alt="React Native Internet Connection Alert" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-internet-connection-alert)

[![Fully customizable internet connection connection with built-in alert for React Native](https://img.shields.io/badge/-Fully%20customizable%20internet%20connection%20connection%20with%20built--in%20alert%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-internet-connection-alert)

[![npm version](https://img.shields.io/npm/v/react-native-internet-connection-alert.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-internet-connection-alert)
[![npm](https://img.shields.io/npm/dt/react-native-internet-connection-alert.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-internet-connection-alert)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Internet Connection Alert"
        src="assets/Screenshots/RN-Internet-Connection-Alert.gif" />
</p>

<p align="center">
  <img alt="React Native Internet Connection Alert"
        src="assets/Screenshots/RN-Internet-Connection-Alert-1.png" width="49%" />
  <img alt="React Native Internet Connection Alert"
        src="assets/Screenshots/RN-Internet-Connection-Alert-2.png" width="49%" />
</p>

# Installation

Add the dependency:

```bash
npm i react-native-internet-connection-alert
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react-native-dropdownalert": "=> 4.5.1",
"@react-native-community/netinfo": "=> 8.3.0"
```

# Usage

## Import

```jsx
import InternetConnectionAlert from "react-native-internet-connection-alert";
```

## Fundamental Usage

<i>I **strongly suggest** that cover **whole applicatio**n with **InternetConnectionAlert** component it will handle itself and be able to shows the built-in alert on your whole application. Otherwise, just cover the screen where you need to use this library.</i>

```jsx
<InternetConnectionAlert
  onChange={(connectionState) => {
    console.log("Connection State: ", connectionState);
  }}
>
  {/* {... Your whole application should be here ... } */}
</InternetConnectionAlert>
```

# Configuration - Props

| Property                |       Type        |               Default                | Description                                                                                               |
| ----------------------- | :---------------: | :----------------------------------: | --------------------------------------------------------------------------------------------------------- |
| onChange                |     function      |              undefined               | if you need the connection state when it is changed, you can use this function                            |
| type                    | DropdownAlertType |                error                 | Use some of the prepared dropdown types or if you want to use **your own customization** set **'custom'** |
| title                   |      string       |     Internet Connection Problem      | to change the title of built-in alert                                                                     |
| message                 |      string       | Please check your network connection | to change the message of built-in alert                                                                   |
| useInternetReachability |      boolean      |                false                 | to change the check for connection state to use internet reachability                                     |

### Everything is customizable on built-in dropdownalert. Simply please look at the [React Native Dropdown Alert](https://github.com/testshallpass/react-native-dropdownalert)

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Internet Connection Alert is available under the MIT license. See the LICENSE file for more info.
