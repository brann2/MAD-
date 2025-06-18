import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../navigation/AppNavigator';
import Logo from '../../assets/logo.svg';

const SignIn = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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
        {/* Card putih form login */}
        <View style={styles.card}>
          <Text style={styles.loginTitle}>Login</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="John Doe" placeholderTextColor="#222" />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date Of Birth</Text>
            <TextInput style={styles.input} placeholder="18/07/2001" placeholderTextColor="#222" />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.bottomText}>
            Don't have an account?{' '}
            <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

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
});
