import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main> </Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
