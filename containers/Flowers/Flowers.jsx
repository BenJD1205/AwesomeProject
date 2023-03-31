import React from 'react';
import { View, Text } from 'react-native';
import { CardFlower } from '../../components/Card';
import * as styles from './Flowers.styles';

const Flowers = (props) => {
  const {
    style = '',
    data =  [],
  } = props;

  return (
    <View style={[styles.wrapper, style]}>
      {
        data.map((i, idx) => (
          <CardFlower 
            key={`${i.maloai}-${idx}`}
            { ...i }
            { ...props }
            
          />
        ))
      }
    </View>
  );
};

export default Flowers;

