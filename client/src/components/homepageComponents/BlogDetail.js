import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import blogDetailStyles from '../../styles/BlogDetailStyles';

const BlogDetail = ({ blog, navigation }) => {
  return (
    <View style={blogDetailStyles.container}>
      <View style={blogDetailStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={blogDetailStyles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={blogDetailStyles.headerTitle}>Blog</Text>
      </View>
      <ScrollView contentContainerStyle={blogDetailStyles.contentContainer}>
        <Text style={blogDetailStyles.title}>{blog.title}</Text>
        <Image source={{ uri: blog.image }} style={blogDetailStyles.image} />
        <Text style={blogDetailStyles.date}>{blog.date}</Text>
        <Text style={blogDetailStyles.content}>{blog.content}</Text>
      </ScrollView>
    </View>
  );
};

export default BlogDetail;
