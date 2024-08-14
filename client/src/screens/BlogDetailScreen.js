import React from 'react';
import BlogDetail from '../components/homepageComponents/BlogDetail';

const BlogDetailScreen = ({ route, navigation }) => {
  const { blog } = route.params;

  return <BlogDetail blog={blog} navigation={navigation} />;
};

export default BlogDetailScreen;
