import React from 'react';
import { View } from 'react-native';
import Profile from '../components/Profile';
import globalStyles from '../styles/GlobalStyles';
import ProfileStyles from '../styles/ProfileStyles';

const userInfo = {
  name: 'Emre',
  surname: 'Mataracı',
  company: 'Steelify',
  title: 'Software Engineer',
  email: 'matar@steelify.com',
  phone: '+90 538 981 5383',
};

const ProfileScreen = () => {
  return (
    <View style={[globalStyles.container, ProfileStyles.screen]}>
      <Profile
        name={userInfo.name}
        surname={userInfo.surname}
        company={userInfo.company}
        title={userInfo.title}
        email={userInfo.email}
        phone={userInfo.phone}
      />
    </View>
  );
};

export default ProfileScreen;
