import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native';
import ProfileStyles from '../styles/ProfileStyles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { getUserComments } from '../services/ProfileService';

const Profile = ({ name, surname, email, phone, photos }) => {
  const [selectedTab, setSelectedTab] = useState('comments');
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await getUserComments();
        setComments(fetchedComments);
      } catch (error) {
        console.error('Error fetching user comments:', error);
      } finally {
        setLoadingComments(false);
      }
    };

    if (selectedTab === 'comments') {
      fetchComments();
    }
  }, [selectedTab]);

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={ProfileStyles.screen}>
      <View style={ProfileStyles.card}>
        <View style={ProfileStyles.avatar}>
          <Text style={ProfileStyles.avatarText}>{name.charAt(0)}</Text>
        </View>
        <Text style={ProfileStyles.paragraph}>{`${name} ${surname}`}</Text>
        <Text style={ProfileStyles.paragraph}>{email}</Text>
        <View style={ProfileStyles.actions}>
          <TouchableOpacity
            style={ProfileStyles.button}
            onPress={() =>
              navigation.navigate('Profili Düzenle', {
                name: name,
                surname: surname,
                phoneNumber: phone,
              })
            }>
            <Text style={ProfileStyles.buttonText}>Profili Düzenle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ProfileStyles.logoutButton}
            onPress={handleLogout}>
            <Text style={ProfileStyles.buttonText}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={ProfileStyles.tabContainer}>
        <TouchableOpacity
          style={[
            ProfileStyles.tabButton,
            selectedTab === 'comments' && ProfileStyles.activeTabButton,
          ]}
          onPress={() => setSelectedTab('comments')}>
          <Text style={ProfileStyles.tabText}>Yorumlarım</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            ProfileStyles.tabButton,
            selectedTab === 'photos' && ProfileStyles.activeTabButton,
          ]}
          onPress={() => setSelectedTab('photos')}>
          <Text style={ProfileStyles.tabText}>Fotoğraflarım</Text>
        </TouchableOpacity>
      </View>

      {selectedTab === 'comments' ? (
        loadingComments ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={comments}
            contentContainerStyle={{ paddingBottom: 16 }}
            renderItem={({ item }) => (
              <View style={ProfileStyles.commentCard}>
                <View style={{ flex: 1 }}>
                  <Text style={ProfileStyles.commentDate}>{formatDate(item.createdAt)}</Text>
                  <Text style={ProfileStyles.commentText}>{item.comments}</Text>
                </View>
                <Image source={{ uri: item.reviewed_image_link }} style={ProfileStyles.commentImage} />
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        )
      ) : (
        <FlatList
          data={photos}
          numColumns={3}
          key={selectedTab}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Image source={{ uri: item.reviewed_image_link }} style={ProfileStyles.photoGrid} />
          )}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
    </View>
  );
};

export default Profile;
