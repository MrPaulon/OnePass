import { StyleSheet, Image } from 'react-native';
import { PoppinsText, BebasNeueText, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import CustomButton from '@/components/Buttons';
import { useRouter } from 'expo-router';

export default function Auth() {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Image source={require('@/assets/images/icon.png')} style={styles.image} />
        <View style={styles.content}>
            <BebasNeueText style={styles.title}>GENERATE {'\n'}<BebasNeueText style={styles.titlebis}>SECURE</BebasNeueText> PASSWORDS.</BebasNeueText>
            <PoppinsText style={styles.subtitle}>Stop using unsecure passwords for your online accounts, level up with OnePass. Get the most secure and difficult-to-crack passwords.</PoppinsText>
        </View>
        <View style={styles.buttons}>
            <CustomButton 
              buttonStyle={styles.button} 
              title="Inscription" 
              onPress={() => router.push('./register' as never)} 
            />
            <CustomButton buttonStyle={styles.button} title="Connexion" onPress={() => {}} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: 20,
    marginTop: 50,
  },
  content: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
    marginTop: 100,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    width: '100%',
  },
  titlebis: {
    fontSize: 64,
    fontWeight: 'bold',
    width: '100%',
    color: Colors.light.primary,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'left',
    color: Colors.light.secondarytext,
  },
  buttons: {
    position: 'absolute',
    bottom: 60,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    height: 60,
    justifyContent: 'center',
    width: '50%',
  }
});
