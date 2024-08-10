import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import allVideosStyles from '../styles/AllVideosStyles';
import CustomVideoPlayer from './homepageComponents/CustomVideoPlayer';

const videos = [
  {
    id: '1',
    title: 'Video 1',
    videoUrl: 'https://yenastorage.blob.core.windows.net/steelify/sample_video1.mp4',
  },
  {
    id: '2',
    title: 'Video 2',
    videoUrl: 'https://yenastorage.blob.core.windows.net/steelify/sample_video2.mp4',
  },
  {
    id: '3',
    title: 'Video 3',
    videoUrl: 'https://yenastorage.blob.core.windows.net/steelify/sample_video3.mp4',
  },
  {
    id: '4',
    title: 'Video 4',
    videoUrl: 'https://yenastorage.blob.core.windows.net/steelify/sample_video4.mp4',
  },
];

const AllVideos = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoPress = (id) => {
    setActiveVideo(id);
  };

  return (
    <View style={allVideosStyles.container}>
      <Text style={allVideosStyles.title}>Bütün Videoları</Text>
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <View style={allVideosStyles.videoItem}>
            <Text style={allVideosStyles.videoTitle}>{item.title}</Text>
            <TouchableOpacity onPress={() => handleVideoPress(item.id)} style={allVideosStyles.videoContainer}>
              <CustomVideoPlayer
                source={{ uri: item.videoUrl }}
                width={'100%'} // AllVideos için genişlik
                height={250} // AllVideos için yükseklik
                paused={activeVideo !== item.id} // Sadece aktif video oynatılır
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default AllVideos;
