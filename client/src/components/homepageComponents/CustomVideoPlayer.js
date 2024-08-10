import React, { useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import customVideoPlayerStyles from '../../styles/CustomVideoPlayerStyles';

const CustomVideoPlayer = ({ source, width, height, paused = true }) => {
  const [isPaused, setIsPaused] = useState(paused);
  const [controlsVisible, setControlsVisible] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
  };

  const handleVideoPress = () => {
    setControlsVisible(!controlsVisible);
  };

  return (
    <View style={[customVideoPlayerStyles.container, { width, height }]}>
      <TouchableOpacity onPress={handleVideoPress} style={customVideoPlayerStyles.video}>
        <Video
          ref={videoRef}
          source={source}
          style={customVideoPlayerStyles.video}
          paused={isPaused}
          resizeMode="contain"
          onLoad={() => setControlsVisible(true)}
        />
        {controlsVisible && (
          <>
            <TouchableOpacity onPress={togglePlayPause} style={customVideoPlayerStyles.playPauseButton}>
              <Ionicons
                name={isPaused ? 'play' : 'pause'}
                size={50}
                color="#FFFFFF"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { videoRef.current.presentFullscreenPlayer(); }} style={customVideoPlayerStyles.fullscreenButton}>
              <Ionicons
                name="expand"
                size={30}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomVideoPlayer;
