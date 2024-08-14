import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import homepageStyles from '../../styles/HomepageStyles';

const blogs = [
  {
    id: '1',
    title: 'Eos omnis vitae in corrupti magni sed itaque incidunt',
    description: 'Sit dolore beatae non consequatur voluptas ex dolor...',
    date: 'July 31, 2024',
    image: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image1.jpg',
    content: 'Full blog content for blog 1 goes here...'
  },
  {
    id: '2',
    title: 'Nam quis dolor ut consequuntur officia',
    description: 'Sit dolore beatae non consequatur voluptas ex dolor...',
    date: 'July 31, 2024',
    image: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image2.jpg',
    content: 'Full blog content for blog 2 goes here...'
  },
];

const BlogList = () => {
  const navigation = useNavigation();

  const handleBlogPress = (blog) => {
    navigation.navigate('Blog', { blog });
  };

  return (
    <View style={homepageStyles.blogListContainer}>
      <Text style={homepageStyles.sectionTitle}>Son Bloglar</Text>
      <FlatList
        data={blogs}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBlogPress(item)}>
            <View style={homepageStyles.blogItem}>
              <Image source={{ uri: item.image }} style={homepageStyles.blogImage} />
              <View style={homepageStyles.blogTextContainer}>
                <Text style={homepageStyles.blogTitle}>{item.title}</Text>
                <Text style={homepageStyles.blogDescription}>{item.description}</Text>
                <View style={homepageStyles.blogFooter}>
                  <Text style={homepageStyles.blogDate}>{item.date}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default BlogList;
