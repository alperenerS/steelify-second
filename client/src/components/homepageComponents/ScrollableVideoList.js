import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import scrollableVideoListStyles from '../../styles/ScrollableVideoListStyles';
import CustomVideoPlayer from './CustomVideoPlayer';

const videos = [
  {
    id: '1',
    title: 'Video 1',
    image: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image1.jpg',
    videoUrl: 'https://yenastorage.blob.core.windows.net/steelify/sample_video1.mp4',
  },
  {
    id: '2',
    title: 'Video 2',
    image: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image2.jpg',
    videoUrl: 'https://yenastorage.blob.core.windows.net/steelify/sample_video2.mp4',
  },
  {
    id: '3',
    title: 'Video 3',
    image: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image3.jpg',
    videoUrl: 'https://yenastorage.blob.core.windows.net/steelify/sample_video3.mp4',
  },
  {
    id: '4',
    title: 'Video 4',
    image: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image4.jpg',
    videoUrl: 'https://yenastorage.blob.core.windows.net/steelify/sample_video4.mp4',
  },
];

const ScrollableVideoList = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const navigation = useNavigation();

  const handleVideoPress = (id) => {
    setActiveVideo(id);
  };

  return (
    <View style={scrollableVideoListStyles.container}>
      <View style={scrollableVideoListStyles.header}>
        <Text style={scrollableVideoListStyles.title}>Kaynak Eğitim Videoları</Text>
        <TouchableOpacity
          style={scrollableVideoListStyles.moreButton}
          onPress={() => navigation.navigate('Bütün Videolar')}
        >
          <Text style={scrollableVideoListStyles.moreButtonText}>Daha Fazla..</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={videos}
        horizontal
        renderItem={({ item }) => (
          <View style={scrollableVideoListStyles.videoItem}>
            {activeVideo === item.id ? (
              <CustomVideoPlayer
                source={{ uri: item.videoUrl }}
                width={200} // ScrollableVideoList için genişlik
                height={120} // ScrollableVideoList için yükseklik
              />
            ) : (
              <TouchableOpacity onPress={() => handleVideoPress(item.id)} style={scrollableVideoListStyles.videoContainer}>
                <Image source={{ uri: item.image }} style={scrollableVideoListStyles.videoImage} />
                <Ionicons
                  name="play"
                  size={50}
                  color="#FFFFFF"
                  style={scrollableVideoListStyles.playIcon}
                />
              </TouchableOpacity>
            )}
            <Text style={scrollableVideoListStyles.videoTitle}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ScrollableVideoList;
