import React from 'react';
import { View } from 'react-native';
import { Card, Avatar, Paragraph, Button, Title } from 'react-native-paper';
import ProfileStyles from '../styles/ProfileStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({ name, surname, company, title, email, phone }) => {
  return (
    <Card style={ProfileStyles.card}>
      <View style={ProfileStyles.header}>
        <Avatar.Icon size={60} icon="account" style={ProfileStyles.avatar} />
        <View style={ProfileStyles.headerText}>
          <Title>{`${name} ${surname}`}</Title>
          <Paragraph>{title}</Paragraph>
        </View>
      </View>
      <Card.Content>
        <Title style={ProfileStyles.title}>{company}</Title>
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
      </Card.Actions>
    </Card>
  );
};

export default Profile;
