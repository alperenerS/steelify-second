import React from 'react';
import { View, Text } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import featuredVideoStyles from '../../styles/FeaturedVideoStyles';

const FeaturedVideo = () => {
  return (
    <View style={featuredVideoStyles.container}>
      <Text style={featuredVideoStyles.title}>Öne Çıkan Video</Text>
      <VideoPlayer
        source={{ uri: 'https://yenastorage.blob.core.windows.net/steelify/sample_video1.mp4' }}
        style={featuredVideoStyles.video}
        paused
        disableFullscreen
        disableBack
        disableVolume
        showOnStart={false}
        onEnterFullscreen={() => {}}
        onExitFullscreen={() => {}}
        controlTimeout={1500}
      />
    </View>
  );
};

export default FeaturedVideo;
