import { StyleSheet, Image, TextInput, useColorScheme, KeyboardAvoidingView, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { PoppinsText, BebasNeueText, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '@/components/Buttons';
import { useRouter } from 'expo-router';

function getTheme() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'light';
  return {
    theme,
    colors: Colors[theme]
  };
}

export default function Register() {
  const router = useRouter();
  const { theme, colors } = getTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView 
      style={[styles.container, {backgroundColor: colors.background}]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView contentContainerStyle={[styles.scrollContainer, {backgroundColor: colors.background}]}>
        <Image source={require('@/assets/images/icon.png')} style={styles.image} />
        <View style={styles.content}>
            <BebasNeueText style={styles.title}>REGISTER</BebasNeueText>
            <PoppinsText style={[styles.subtitle, { color: colors.secondarytext }]}>Create an account to get started.</PoppinsText>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <BebasNeueText style={styles.label}>Pseudo</BebasNeueText>
                    <TextInput style={[styles.input, { color: colors.text }]} placeholder="Pseudo" />
                </View>
                <View style={styles.formGroup}>
                    <BebasNeueText style={styles.label}>Email</BebasNeueText>
                    <TextInput style={[styles.input, { color: colors.text }]} placeholder="Email" />
                </View>
                <View style={styles.formGroup}>
                    <BebasNeueText style={styles.label}>Mot de passe</BebasNeueText>
                    <View style={styles.passwordContainer}>
                        <TextInput 
                            style={[styles.input, styles.passwordInput, { color: colors.text }]} 
                            placeholder="Mot de passe" 
                            secureTextEntry={!showPassword} 
                        />
                        <TouchableOpacity 
                            style={styles.eyeIcon} 
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Ionicons 
                                name={showPassword ? 'eye-off' : 'eye'} 
                                size={24} 
                                color={colors.text} 
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <CustomButton 
              buttonStyle={styles.button} 
              title="S'inscrire" 
              onPress={() => router.push('../home/index' as never)} 
            />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginTop: 70,
  },
  content: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    width: '100%',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 0,
    textAlign: 'left',
    width: '80%',
    alignSelf: 'flex-start',
  },
  form: {
    width: '100%',
    marginTop: 60,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.light.secondarytext,
    borderRadius: 10,
    padding: 10,
    height: 45,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  button: {
    marginTop: 20,
    width: '100%',
  },
});
