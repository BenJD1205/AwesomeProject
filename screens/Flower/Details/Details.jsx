import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import * as styles from './Details.styles';


const Details = (props) => {
  const {
    style = '',
  } = props;

  console.log(props);

  return (
    <View style={[styles.wrapper, style]}>
      <View stlyed={styled.content}>

      </View>
    </View>
  );
};

const styled = StyleSheet.create({
  content: {
    flexDirection:'row'
  },
  img: {
    
  }
})

export default Details;

