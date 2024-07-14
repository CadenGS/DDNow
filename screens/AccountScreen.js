import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const DATA = {
  profile: {
    avatar: 'https://via.placeholder.com/120',
    name: 'Name',
    surname: 'Surname',
  },
  contactInformation: {
    phoneNumber: '+1 (XXX) XXX XXXX',
    emailAddress: 'dd****@gmail.com',
  },
  vehicleDetails: {
    manufacturer: 'Honda',
    model: 'Civic',
    color: 'Gray',
    licensePlate: 'XXXXX',
    seats: 'X',
    capacity: 'X',
  },
  organizationDetails: {
    college: 'School',
    houseName: 'House name',
  },
};

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image style={styles.avatar} source={{ uri: DATA.profile.avatar }} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{DATA.profile.name}</Text>
          <Text style={styles.surname}>{DATA.profile.surname}</Text>
        </View>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <Text>
          <Text style={styles.label}>Phone Number: </Text>
          <Text style={styles.privateInfo}>{DATA.contactInformation.phoneNumber}</Text>
        </Text>
        <Text>
          <Text style={styles.label}>Email Address: </Text>
          <Text style={styles.privateInfo}>{DATA.contactInformation.emailAddress}</Text>
        </Text>
        <Text style={styles.sectionTitle}>Vehicle Details</Text>
        <Text>
          <Text style={styles.label}>Manufacturer: </Text>
          <Text style={styles.privateInfo}>{DATA.vehicleDetails.manufacturer}</Text>
        </Text>
        <Text>
          <Text style={styles.label}>Model: </Text>
          <Text style={styles.privateInfo}>{DATA.vehicleDetails.model}</Text>
        </Text>
        <Text>
          <Text style={styles.label}>Color: </Text>
          <Text style={styles.privateInfo}>{DATA.vehicleDetails.color}</Text>
        </Text>
        <Text>
          <Text style={styles.label}>License Plate: </Text>
          <Text style={styles.privateInfo}>{DATA.vehicleDetails.licensePlate}</Text>
        </Text>
        <Text>
          <Text style={styles.label}>Car # of Seats: </Text>
          <Text style={styles.privateInfo}>{DATA.vehicleDetails.seats}</Text>
        </Text>
        <Text>
          <Text style={styles.label}>Max Car Capacity: </Text>
          <Text style={styles.privateInfo}>{DATA.vehicleDetails.capacity}</Text>
        </Text>
        <Text style={styles.sectionTitle}>Organization Details</Text>
        <Text>
          <Text style={styles.label}>College/University: </Text>
          <Text style={styles.privateInfo}>{DATA.organizationDetails.college}</Text>
        </Text>
        <Text>
          <Text style={styles.label}>House Name: </Text>
          <Text style={styles.privateInfo}>{DATA.organizationDetails.houseName}</Text>
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F3434',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -90
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 10,
  },
  nameContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  surname: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    padding: 22.5,
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: '#000000',
  },
  privateInfo: {
    fontSize: 16,
    color: '#9E9E9E',
  },
});
