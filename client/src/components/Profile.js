import React, { useContext } from 'react';
import { View } from 'react-native';
import { Card, Avatar, Paragraph, Button, Title } from 'react-native-paper';
import ProfileStyles from '../styles/ProfileStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

const Profile = ({ name, surname, email, phone }) => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

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

  return (
    <Card style={ProfileStyles.card}>
      <View style={ProfileStyles.header}>
        <Avatar.Icon size={60} icon="account" style={ProfileStyles.avatar} />
        <View style={ProfileStyles.headerText}>
          <Title style={ProfileStyles.paragraph} >{`${name} ${surname}`}</Title>
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
      <Card.Actions style={ProfileStyles.actions}>
      <Button icon="account-edit" mode="contained" style={ProfileStyles.button}>
          Profili Düzenle
      </Button>
      <View style={ProfileStyles.spacer} />
      <Button icon="logout" mode="contained" style={ProfileStyles.logoutButton} onPress={handleLogout}>
          Çıkış Yap
      </Button>
      </Card.Actions>
    </Card>
  );
};

export default Profile;
