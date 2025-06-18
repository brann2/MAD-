import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Logo from '../assets/logo.svg';

const StudentPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <Logo width={48} height={48} />
        </View>
        <Text style={styles.headerTitle}>Selamat Datang, Siswa!</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={styles.avatar}
          />
          <Text style={styles.studentName}>John Doe</Text>
          <Text style={styles.studentEmail}>johndoe@email.com</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.label}>NIS</Text>
          <Text style={styles.valueLink}>123456789</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.label}>Kelas</Text>
          <Text style={styles.valueLink}>XII IPA 1</Text>
        </View>
        <View style={styles.dataRow}>
          <Text style={styles.label}>Alamat</Text>
          <Text style={styles.valueLink}>Jl. Pendidikan No. 1</Text>
        </View>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Lihat Buku Saya</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default StudentPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  header: {
    backgroundColor: '#2250B3',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 4,
    letterSpacing: 0.2,
  },
  card: {
    backgroundColor: '#fff',
    marginTop: -32,
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 8,
    alignItems: 'center',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#2250B3',
    marginBottom: 8,
  },
  studentName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#222',
    marginBottom: 2,
  },
  studentEmail: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8A8A8A',
    marginBottom: 12,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#222',
  },
  valueLink: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#2250B3',
    textDecorationLine: 'underline',
  },
  actionButton: {
    marginTop: 24,
    backgroundColor: '#2250B3',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 8,
  },
  actionButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    letterSpacing: 0.2,
  },
}); 