import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Logo from '../assets/logo.svg';

const TeacherPage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.header}>
          <Logo width={48} height={48} />
          <Text style={styles.headerTitle}>Selamat Datang, Guru!</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Data Guru</Text>
          <View style={styles.dataRow}>
            <Text style={styles.label}>Nama:</Text>
            <Text style={styles.value}>Jane Smith</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.label}>NIP:</Text>
            <Text style={styles.value}>987654321</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.label}>Mata Pelajaran:</Text>
            <Text style={styles.value}>Matematika</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeacherPage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  header: {
    backgroundColor: '#1E40AF',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 8,
    letterSpacing: 0.2,
  },
  card: {
    backgroundColor: '#fff',
    marginTop: -24,
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#222',
    marginBottom: 16,
    letterSpacing: 0.2,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#222',
  },
  value: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#1E40AF',
  },
}); 