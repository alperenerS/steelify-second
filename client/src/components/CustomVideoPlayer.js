import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import customVideoPlayerStyles from '../styles/CustomVideoPlayerStyles';

const CustomVideoPlayer = ({ source, style }) => {
  const [paused, setPaused] = useState(true);

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  useEffect(() => {
    return () => {
      setPaused(true); // Pause the video when the component unmounts
    };
  }, []);


  const handleError = (error) => {
    console.log('Video Error:', error);
    Alert.alert('Video Error', 'An error occurred while playing the video. Please try again later.');
  };

  return (
    <View style={[customVideoPlayerStyles.container, style]}>
      <Video
        source={source}
        style={customVideoPlayerStyles.video}
        resizeMode="cover"
        paused={paused}
        repeat
        onError={handleError}
      />
      <TouchableOpacity style={customVideoPlayerStyles.controlOverlay} onPress={handlePlayPause}>
        <Icon name={paused ? 'play' : 'pause'} size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomVideoPlayer;
