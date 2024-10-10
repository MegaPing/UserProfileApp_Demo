import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

// Import the local image
const placeholderImage = require('../assets/GenericProfilePic.jpg');

const UserProfile = () => {
  const [username, setUsername] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [photo, setPhoto] = useState(placeholderImage); // Use the local image as default

  // Dummy statistics data
  const totalFriends = 27;
  const totalPoints = 253;
  const totalPhotos = 417;

  const handlePhotoChange = () => {
    Alert.alert('Photo upload feature is under development!');
  };

  const handleSave = () => {
    Alert.alert('Changes saved!');
  };

  const handleLogout = () => {
    Alert.alert('User logged out!');
  };

  const handleAddFriends = () => {
    Alert.alert('Add Friends feature is under development!');
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profile feature is under development!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePhotoChange}>
        <Image source={photo} style={styles.profileImage} />
      </TouchableOpacity>

      {/* Username Title Display */}
      <Text style={styles.username}>{username}</Text>
      
      {/* Email Subtitle Display */}
      <Text style={styles.email}>{email}</Text>

      {/* Player Statistics */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statText}>{totalFriends}</Text>
          <Text style={styles.statLabel}>friends added</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statText}>{totalPoints}</Text>
          <Text style={styles.statLabel}>points scored</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statText}>{totalPhotos}</Text>
          <Text style={styles.statLabel}>photos taken</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>

      {/* Add Friends Button */}
      <TouchableOpacity style={styles.friendsButton} onPress={handleAddFriends}>
        <Text style={styles.friendsButtonText}>Add Friends</Text>
      </TouchableOpacity>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  username: {
    fontSize: 24, // Large font size for the username
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16, // Font size for the email
    color: '#666', // Grey color for the email
    marginBottom: 20, // Space between email and stats
  },
  statsContainer: {
    flexDirection: 'row', // Layout children in a row
    justifyContent: 'space-around', // Space them evenly
    width: '100%', // Allow the full width
    marginBottom: 20, // Space between stats and buttons
  },
  statBox: {
    backgroundColor: '#f0f0f0', // Light grey background
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: '30%', // Allow each box to take up about a third of the width
  },
  statText: {
    fontSize: 18, // Font size for statistics value
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14, // Font size for the statistic label
    color: '#666',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  friendsButton: {
    backgroundColor: '#28a745', // Green color for Add Friends
    padding: 12,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
  },
  friendsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#ffc107', // Yellow color for Edit Profile
    padding: 12,
    borderRadius: 5,
    marginVertical: 5,
    width: '100%',
  },
  editButtonText: {
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#d9534f',
    padding: 12,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UserProfile;