import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import ProfileStyles from '../styles/ProfileStyles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const Profile = ({ name, surname, email }) => {
  const [selectedTab, setSelectedTab] = useState('comments');
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await logout();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Giriş Yap' }],
      });
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const comments = [
    {
      id: '1',
      date: 'June 5, 2024 | 12:00 pm',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: '2',
      date: 'June 6, 2024 | 1:00 pm',
      text: 'Curabitur vel sem sit amet nulla pharetra accumsan.',
    },
    {
      id: '3',
      date: 'June 7, 2024 | 2:00 pm',
      text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
    },
    {
      id: '4',
      date: 'June 8, 2024 | 3:00 pm',
      text: 'Praesent vel elit vel erat fermentum suscipit.',
    },
    {
      id: '5',
      date: 'June 9, 2024 | 4:00 pm',
      text: 'Morbi gravida metus at nunc congue, at vehicula sem elementum.',
    },
  ];

  const photos = [
    {
      id: '1',
      uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image1.jpg',
    },
    {
      id: '2',
      uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image2.jpg',
    },
    {
      id: '3',
      uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image3.jpg',
    },
    {
      id: '4',
      uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image4.jpg',
    },
    {
      id: '5',
      uri: 'https://yenastorage.blob.core.windows.net/steelify/steelify_sample_image5.jpg',
    },
  ];

  return (
    <View style={ProfileStyles.screen}>
      <View style={ProfileStyles.card}>
        <View style={ProfileStyles.avatar}>
          <Text style={ProfileStyles.avatarText}>{name.charAt(0)}</Text>
        </View>
        <Text style={ProfileStyles.paragraph}>{`${name} ${surname}`}</Text>
        <Text style={ProfileStyles.paragraph}>{email}</Text>
        <View style={ProfileStyles.actions}>
          <TouchableOpacity style={ProfileStyles.button} onPress={() => {}}>
            <Text style={ProfileStyles.buttonText}>Profili Düzenle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ProfileStyles.logoutButton} onPress={handleLogout}>
            <Text style={ProfileStyles.buttonText}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={ProfileStyles.tabContainer}>
        <TouchableOpacity
          style={[ProfileStyles.tabButton, selectedTab === 'comments' && ProfileStyles.activeTabButton]}
          onPress={() => setSelectedTab('comments')}
        >
          <Text style={ProfileStyles.tabText}>Yorumlarım</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ProfileStyles.tabButton, selectedTab === 'photos' && ProfileStyles.activeTabButton]}
          onPress={() => setSelectedTab('photos')}
        >
          <Text style={ProfileStyles.tabText}>Fotoğraflarım</Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'comments' ? (
        <FlatList
          data={comments}
          contentContainerStyle={{ paddingBottom: 16 }}
          renderItem={({ item }) => (
            <View style={ProfileStyles.commentCard}>
              <View style={{ flex: 1 }}>
                <Text style={ProfileStyles.commentDate}>{item.date}</Text>
                <Text style={ProfileStyles.commentText}>{item.text}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <FlatList
          data={photos}
          numColumns={3}
          key={selectedTab} // numColumns değiştiğinde FlatList'in yeniden render edilmesini sağlar
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={ProfileStyles.photoGrid} />
          )}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
    </View>
  );
};

export default Profile;
