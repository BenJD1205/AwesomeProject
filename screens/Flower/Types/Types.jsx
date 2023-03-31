import React from 'react';
import { View, Text } from 'react-native';
import Flowers from '../../../containers/Flowers';
import {loaihoas} from '../../../constants/loaihoa'
import * as styles from './Types.styles';

const Types = (props) => {
  const {
    style = '',
  } = props;

  return (
    <View style={[styles.wrapper, style]}>
      <Flowers { ...props } data={loaihoas} />
    </View>
  );
};

export default Types;

