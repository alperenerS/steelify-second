import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import homepageStyles from '../../styles/HomepageStyles';
import blogs from './Blogs';  // blogs.js dosyasını import ediyoruz

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
