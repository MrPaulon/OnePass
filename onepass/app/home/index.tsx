import { StyleSheet, Image } from 'react-native';
import { PoppinsText, BebasNeueText, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import CustomButton from '@/components/Buttons';
import { useRouter } from 'expo-router';

export default function Auth() {
  const router = useRouter();

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
