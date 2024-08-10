import React from 'react';
import { View, Text } from 'react-native';
import CustomVideoPlayer from '../homepageComponents/CustomVideoPlayer';
import featuredVideoStyles from '../../styles/FeaturedVideoStyles';

const FeaturedVideo = () => {
  return (
    <View style={featuredVideoStyles.container}>
      <Text style={featuredVideoStyles.title}>Öne Çıkan Video</Text>
      <CustomVideoPlayer
        source={{ uri: 'https://yenastorage.blob.core.windows.net/steelify/sample_video1.mp4' }}
        width="100%" k
        height={200}
      />
    </View>
  );
};

export default FeaturedVideo;
