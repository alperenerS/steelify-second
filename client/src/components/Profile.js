import React from 'react';
import { View } from 'react-native';
import { Card, Avatar, Paragraph, Button, Title } from 'react-native-paper';
import ProfileStyles from '../styles/ProfileStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { logoutUser } from '../services/LogoutService';

const Profile = ({ name, surname, email, phone }) => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigation.navigate('Giriş Yap');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <Card style={ProfileStyles.card}>
      <View style={ProfileStyles.header}>
        <Avatar.Icon size={60} icon="account" style={ProfileStyles.avatar} />
        <View style={ProfileStyles.headerText}>
          <Title>{`${name} ${surname}`}</Title>
        </View>
      </View>
      <Card.Content>
        <Paragraph style={ProfileStyles.paragraph}>
          <Icon name="email" size={16} /> {email}
        </Paragraph>
        <Paragraph style={ProfileStyles.paragraph}>
          <Icon name="phone" size={16} /> {phone}
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button icon="account-edit" mode="contained" style={ProfileStyles.button}>
          Edit Profile
        </Button>
        <Button icon="logout" mode="contained" style={ProfileStyles.button} onPress={handleLogout}>
          Logout
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default Profile;
