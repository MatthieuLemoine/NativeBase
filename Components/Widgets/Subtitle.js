/* @flow */
'use strict';

import React from 'react';
import { Text, View, Platform } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';


export default class Subtitle extends NativeBaseComponent {

  render() {
    const style = {
      color: this.getTheme().subtitleColor,
      fontSize: this.getTheme().subTitleFontSize,
      alignSelf: (Platform.OS === 'ios') ? 'center' : 'flex-start',
      ...this.props.style,
    };
    return (
      <View><Text style={style}>{this.props.children}</Text></View>
   );
  }
}
