import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import * as styles from './Flower.styles';


const Flower = (props) => {
  const {
    style = '',
    vertical = false,
    tenloai = '',
    maloai = '',
    tenhoa = '',
    mahoa = '',
    hinh='',
  } = props;

  const handleNavigation = (e) => {
    if(props?.route?.name === 'ScreenFlower') {
      props.navigation.navigate('ScreenFlowerDetails', { tenhoa, mahoa,hinh,dongia })
    }else if(props?.route?.name === 'ScreenFlowerTypes') {
      props.navigation.navigate('ScreenFlower', { tenloai, maloai })
    }
  };

  return (
    <TouchableOpacity 
      style={styled.container}
      onPress={handleNavigation}
    >
      <View style={styled.content}>
        <Image source={hinh} style={styled.img} />
        <View style={styled.info}>
          <Text>{maloai}</Text>
          <Text>{tenloai || tenhoa}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styled = StyleSheet.create({
  container: {
    margin:10,
  },
  content: { 
    flexDirection: 'row',
  },
  img: {
    width: 50,
    height:50,
  },
  info: {
    width: '100%',
    paddingHorizontal:10,
  }
})

export default Flower;

