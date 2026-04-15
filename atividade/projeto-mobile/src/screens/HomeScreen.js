import { View, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/welcome_cat.png')} 
        style={styles.welcomeImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  welcomeImage: {
    width: '80%', 
    height: 300,
  },
});

export default HomeScreen;