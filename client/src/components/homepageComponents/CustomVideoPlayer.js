import React, { useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import customVideoPlayerStyles from '../../styles/CustomVideoPlayerStyles';

const CustomVideoPlayer = ({ source }) => {
  const [paused, setPaused] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  const handleFullscreen = () => {
    if (fullscreen) {
      videoRef.current.dismissFullscreenPlayer();
    } else {
      videoRef.current.presentFullscreenPlayer();
    }
    setFullscreen(!fullscreen);
  };

  const handleVideoPress = () => {
    setControlsVisible(!controlsVisible);
  };

  return (
    <View style={customVideoPlayerStyles.container}>
      <TouchableOpacity onPress={handleVideoPress} style={customVideoPlayerStyles.video}>
        <Video
          ref={videoRef}
          source={source}
          style={customVideoPlayerStyles.video}
          paused={paused}
          resizeMode="contain"
          onFullscreenPlayerWillPresent={() => setFullscreen(true)}
          onFullscreenPlayerWillDismiss={() => setFullscreen(false)}
          onLoad={() => setControlsVisible(true)}
        />
        {controlsVisible && (
          <>
            <TouchableOpacity onPress={togglePlayPause} style={customVideoPlayerStyles.playPauseButton}>
              <Ionicons
                name={paused ? 'play' : 'pause'}
                size={50}
                color="#FFFFFF"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFullscreen} style={customVideoPlayerStyles.fullscreenButton}>
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
