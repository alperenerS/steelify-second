import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import homepageStyles from '../../styles/HomepageStyles';

const videos = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Sit dolore beatae non consequatur voluptas ex dolor...',
    duration: '42:00',
    image: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image3.jpg',
  },
  {
    id: '2',
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Sit dolore beatae non consequatur voluptas ex dolor...',
    duration: '42:00',
    image: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image4.jpg',
  },
];

const VideoList = () => {
  return (
    <View style={homepageStyles.videoListContainer}>
      <Text style={homepageStyles.sectionTitle}>Popular Videos</Text>
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <View style={homepageStyles.videoItem}>
            <Image source={{ uri: item.image }} style={homepageStyles.videoImage} />
            <View style={homepageStyles.videoTextContainer}>
              <Text style={homepageStyles.videoTitle}>{item.title}</Text>
              <Text style={homepageStyles.videoDescription}>{item.description}</Text>
              <Text style={homepageStyles.videoDuration}>{item.duration}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default VideoList;
