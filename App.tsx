import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Header, MobileWrapper, SearchBar } from './components';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <MobileWrapper />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
