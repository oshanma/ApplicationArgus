import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Logo */}
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} />

      {/* Login & Register Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={[styles.button, styles.activeButton]} onPress={() => router.push("/(onboarding)/login/indexLogin")}>
          <Text style={[styles.buttonText, styles.activeButtonText]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.inactiveButton]} onPress={() => router.push("/(onboarding)/register/indexRegister")}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Login with Google Button */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.googleButton} onPress={() => alert("Google Login Coming Soon!")}>
        <Image source={require('@/assets/images/gmail.png')} style={styles.googleIcon} />
        <Text style={styles.googleText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  buttonGroup: {
    flexDirection: "row",
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#fff",
  },
  inactiveButton: {
    backgroundColor: "#F3F3F3",
  },
  activeButtonText: {
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    color: "#888",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

