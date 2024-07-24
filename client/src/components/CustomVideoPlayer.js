import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const CustomVideoPlayer = ({ source, style }) => {
  const [paused, setPaused] = useState(true);

  const handlePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <View style={style}>
      <VideoPlayer
        source={source}
        style={styles.video}
        resizeMode="cover"
        paused={paused}
        disableVolume
        disableFullscreen
        disableBack
        onPlayPress={handlePlayPause}
        onPausePress={handlePlayPause}
        repeat
      />
      <TouchableOpacity style={styles.controlOverlay} onPress={handlePlayPause}>
        {/* Ekstra buton veya kontrol ekleyebilirsiniz */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
  controlOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomVideoPlayer;
