import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import homepageStyles from '../../styles/HomepageStyles';

const blogs = [
  {
    id: '1',
    title: 'Eos omnis vitae in corrupti magni sed itaque incidunt',
    description: 'Sit dolore beatae non consequatur voluptas ex dolor...',
    date: 'July 31, 2024',
    image: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image1.jpg',
  },
  {
    id: '2',
    title: 'Nam quis dolor ut consequuntur officia',
    description: 'Sit dolore beatae non consequatur voluptas ex dolor...',
    date: 'July 31, 2024',
    image: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image2.jpg',
  },
];

const BlogList = () => {
  return (
    <View style={homepageStyles.blogListContainer}>
      <Text style={homepageStyles.sectionTitle}>Son Bloglar</Text>
      <FlatList
        data={blogs}
        renderItem={({ item }) => (
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
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default BlogList;
