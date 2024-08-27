import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EditProfileStyles from '../styles/EditProfileStyles';
import { updateUserInfo } from '../services/ProfileService';

const EditProfileScreen = ({ route }) => {
  const { name, surname, phoneNumber } = route.params;
  const [newName, setNewName] = useState(name);
  const [newSurname, setNewSurname] = useState(surname);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const navigation = useNavigation();

  const handleSave = async () => {
    try {
      await updateUserInfo(newName, newSurname, newPhoneNumber);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Profil' }],
      });
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  const handleCancel = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Profil' }],
    });
  };

  return (
    <View style={[EditProfileStyles.screen, EditProfileStyles.container]}>
      <View style={EditProfileStyles.card}>
        <Text style={EditProfileStyles.headerTitle}>Profili Düzenle</Text>
        <View style={EditProfileStyles.inputContainer}>
          <Text style={EditProfileStyles.label}>Ad</Text>
          <TextInput
            style={EditProfileStyles.input}
            value={newName}
            onChangeText={setNewName}
            placeholder="Adınızı girin"
          />
        </View>
        <View style={EditProfileStyles.inputContainer}>
          <Text style={EditProfileStyles.label}>Soyad</Text>
          <TextInput
            style={EditProfileStyles.input}
            value={newSurname}
            onChangeText={setNewSurname}
            placeholder="Soyadınızı girin"
          />
        </View>
        <View style={EditProfileStyles.inputContainer}>
          <Text style={EditProfileStyles.label}>Telefon Numarası</Text>
          <TextInput
            style={EditProfileStyles.input}
            value={newPhoneNumber}
            onChangeText={setNewPhoneNumber}
            placeholder="Telefon numaranızı girin"
            keyboardType="phone-pad"
          />
        </View>
        <View style={EditProfileStyles.actions}>
          <TouchableOpacity style={EditProfileStyles.button} onPress={handleSave}>
            <Text style={EditProfileStyles.buttonText}>Kaydet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[EditProfileStyles.button, EditProfileStyles.cancelButton]}
            onPress={handleCancel}>
            <Text style={EditProfileStyles.buttonText}>Vazgeç</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfileScreen;
