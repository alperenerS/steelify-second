import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import homepageStyles from '../styles/HomepageStyles';
import BlogList from './homepageComponents/Bloglist';
import FeaturedVideo from './homepageComponents/FeaturedVideo';
import ScrollableVideoList from './homepageComponents/ScrollableVideoList';

const Homepage = () => {
  const [name, setName] = useState('');

  //TODO: Videolist files will be removed from project.
  useEffect(() => {
    const getName = async () => {
      const storedName = await AsyncStorage.getItem('name');
      if (storedName) {
        setName(storedName);
      }
    };

    getName();
  }, []);

  const renderHeader = () => (
    <>
      <View style={homepageStyles.header}>
        <View style={homepageStyles.greetingContainer}>
          <Text style={homepageStyles.greeting}>
            Merhaba{ name ? ` ${name},` : ''}
          </Text>
        </View>
      </View>
      <FeaturedVideo />
      <ScrollableVideoList />
    </>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={[]}
      renderItem={null}
      keyExtractor={() => 'key'}
      ListFooterComponent={() => (
        <>
          <BlogList />
        </>
      )}
    />
  );
};

export default Homepage;
