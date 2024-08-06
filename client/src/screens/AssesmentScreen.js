import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Assesment from '../components/Assesment';
import assesmentStyles from '../styles/AssesmentStyles';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  { id: 1, uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image1.jpg' },
  { id: 2, uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image2.jpg' },
  { id: 3, uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image3.jpg' },
  { id: 4, uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image4.jpg' },
  { id: 5, uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image5.jpg' },
  { id: 6, uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image6.jpg' },
];

const AssesmentScreen = () => {
  const leftOverlayRef = useRef(null);
  const rightOverlayRef = useRef(null);

  const onSwipedRight = (assesmentIndex) => {
    console.log('Accepted:', data[assesmentIndex]);
    rightOverlayRef.current?.animate('fadeIn', 300).then(() => {
      setTimeout(() => {
        rightOverlayRef.current?.animate('fadeOut', 300);
      }, 500);
    });
  };

  const onSwipedLeft = (assesmentIndex) => {
    console.log('Rejected:', data[assesmentIndex]);
    leftOverlayRef.current?.animate('fadeIn', 300).then(() => {
      setTimeout(() => {
        leftOverlayRef.current?.animate('fadeOut', 300);
      }, 500);
    });
  };

  const onSwiping = (x, y) => {
    if (x < 0) {
      const opacity = Math.min(Math.abs(x) / 200, 1);
      leftOverlayRef.current?.setNativeProps({ opacity });
    } else if (x > 0) {
      const opacity = Math.min(x / 200, 1);
      rightOverlayRef.current?.setNativeProps({ opacity });
    }
  };

  return (
    <View style={assesmentStyles.container}>
      <Swiper
        cards={data}
        renderCard={(card) => <Assesment uri={card.uri} />}
        onSwipedRight={onSwipedRight}
        onSwipedLeft={onSwipedLeft}
        onSwiping={onSwiping}
        cardIndex={0}
        backgroundColor={'#f0f0f0'}
        stackSize={3}
      />
      <Animatable.View ref={leftOverlayRef} style={[assesmentStyles.overlayLabel]}>
        <Icon name="times" style={[assesmentStyles.overlayLabelText, assesmentStyles.overlayLabelLeft]} />
      </Animatable.View>
      <Animatable.View ref={rightOverlayRef} style={[assesmentStyles.overlayLabel]}>
        <Icon name="check" style={[assesmentStyles.overlayLabelText, assesmentStyles.overlayLabelRight]} />
      </Animatable.View>
    </View>
  );
};

export default AssesmentScreen;
