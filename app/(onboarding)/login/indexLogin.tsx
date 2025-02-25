import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/authentication/authSlice';

export default function LoginScreen() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Simulated Login Function
  const handleLogin = () => {
    if (email === 'test@example.com' && password === 'password123') {
      dispatch(login(email)); // Save user info in Redux
      Alert.alert('Login Successful', 'Welcome back!');
      router.replace('/(tabs)/explore'); // Navigate to Explore
    } else {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />

      <Text style={styles.text}>Welcome to Argus</Text>

      <TextInput 
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput 
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Register Button */}
      <TouchableOpacity onPress={() => router.push('/(onboarding)/register/indexRegister')}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  loginButton: {
    width: '100%',
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 10,
    color: '#007BFF',
    fontSize: 16,
  },
});
