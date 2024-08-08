import React, { useRef, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Assesment from '../components/Assesment';
import assesmentStyles from '../styles/AssesmentStyles';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getRandomAssesments } from '../services/AssesmentService';

const AssesmentScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noMoreCards, setNoMoreCards] = useState(false);
  const leftOverlayRef = useRef(null);
  const rightOverlayRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRandomAssesments();
        setData(result);
      } catch (error) {
        console.error('Error fetching assessments:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onSwipedRight = (assessmentIndex) => {
    console.log('Accepted:', data[assessmentIndex]);
    rightOverlayRef.current?.animate('fadeIn', 300).then(() => {
      setTimeout(() => {
        rightOverlayRef.current?.animate('fadeOut', 300);
      }, 500);
    });
  };

  const onSwipedLeft = (assessmentIndex) => {
    console.log('Rejected:', data[assessmentIndex]);
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
      rightOverlayRef.current?.setNativeProps({ opacity: 0 });
    } else if (x > 0) {
      const opacity = Math.min(x / 200, 1);
      rightOverlayRef.current?.setNativeProps({ opacity });
      leftOverlayRef.current?.setNativeProps({ opacity: 0 });
    } else {
      leftOverlayRef.current?.setNativeProps({ opacity: 0 });
      rightOverlayRef.current?.setNativeProps({ opacity: 0 });
    }
  };

  const onSwipedAll = () => {
    setNoMoreCards(true);
  };

  if (loading) {
    return (
      <View style={assesmentStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={assesmentStyles.container}>
      {noMoreCards ? (
        <Text style={assesmentStyles.noMoreCardsText}>
          Şimdilik Değerlendirilecek Bir Şey Yok. Daha Sonra Tekrar Deneyin.
        </Text>
      ) : (
        <Swiper
          cards={data}
          renderCard={(card) => <Assesment uri={card.image_link} />}
          onSwipedRight={onSwipedRight}
          onSwipedLeft={onSwipedLeft}
          onSwiping={onSwiping}
          cardIndex={0}
          backgroundColor={'#f0f0f0'}
          stackSize={3}
          onSwipedAll={onSwipedAll}
        />
      )}
      <Animatable.View ref={leftOverlayRef} style={[assesmentStyles.overlayLabel, assesmentStyles.overlayLabelLeft]}>
        <Icon name="times" style={assesmentStyles.overlayLabelText} />
      </Animatable.View>
      <Animatable.View ref={rightOverlayRef} style={[assesmentStyles.overlayLabel, assesmentStyles.overlayLabelRight]}>
        <Icon name="check" style={assesmentStyles.overlayLabelText} />
      </Animatable.View>
    </View>
  );
};

export default AssesmentScreen;
