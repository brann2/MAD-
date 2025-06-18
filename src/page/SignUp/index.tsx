import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../navigation/AppNavigator';
import Logo from '../../assets/logo.svg';

const ROLES = [
  { label: 'Siswa', value: 'siswa' },
  { label: 'Guru', value: 'guru' },
  { label: 'Tamu', value: 'tamu' },
];

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [role, setRole] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        {/* Header biru dengan logo dan judul */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.logoWrapper} onPress={() => navigation.navigate('MainPage')}>
            <Logo width={60} height={60} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Welcome! to{"\n"}Adventist Paal 2 Library</Text>
        </View>
        {/* Card putih form sign up */}
        <View style={styles.card}>
          <Text style={styles.loginTitle}>Sign Up</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="John Doe" placeholderTextColor="#222" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date Of Birth</Text>
            <TextInput style={styles.input} placeholder="18/07/2001" placeholderTextColor="#222" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pilih Hak Akses</Text>
            <TouchableOpacity
              style={[styles.input, styles.rolePicker]}
              onPress={() => setModalVisible(true)}
              activeOpacity={0.7}
            >
              <Text style={{ color: role ? '#222' : '#888', fontFamily: 'Poppins-Regular', fontSize: 16 }}>
                {role ? ROLES.find(r => r.value === role)?.label : 'Pilih Hak Akses'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="email@example.com" placeholderTextColor="#222" keyboardType="email-address" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#222" secureTextEntry />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (role === 'siswa') navigation.navigate('StudentPage');
              else if (role === 'guru') navigation.navigate('TeacherPage');
              else if (role === 'tamu') navigation.navigate('GuestPage');
            }}
            disabled={!role}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={styles.bottomText}>
            Already have an account?{' '}
            <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>Login</Text>
          </Text>
        </View>
        {/* Modal Pilih Role */}
        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Pilih Hak Akses</Text>
              {ROLES.map(r => (
                <TouchableOpacity
                  key={r.value}
                  style={styles.modalOption}
                  onPress={() => {
                    setRole(r.value);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.modalOptionText}>{r.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1E40AF',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  logoWrapper: {
    marginBottom: 8,
    marginTop: 8,
  },
  headerTitle: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 28,
    letterSpacing: 0.2,
  },
  card: {
    backgroundColor: '#fff',
    marginTop: -24,
    marginHorizontal: 0,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    flex: 1,
  },
  loginTitle: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 8,
    color: '#222',
    letterSpacing: 0.2,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginBottom: 4,
    color: '#222',
    letterSpacing: 0.1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#fff',
    color: '#222',
  },
  rolePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
  },
  button: {
    backgroundColor: '#1E40AF',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    letterSpacing: 0.2,
  },
  bottomText: {
    textAlign: 'center',
    color: '#222',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 8,
  },
  link: {
    color: '#1E40AF',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    minWidth: 260,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 8,
  },
  modalTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#222',
    marginBottom: 16,
  },
  modalOption: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#F1F5F9',
    width: '100%',
    alignItems: 'center',
  },
  modalOptionText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#1E40AF',
  },
});
